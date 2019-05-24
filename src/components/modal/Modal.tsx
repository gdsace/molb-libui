import * as React from "react";
import { createPortal } from "react-dom";

import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll
} from "body-scroll-lock";
import classNames from "classnames";
import _ from "lodash";
import { Icon } from "../icons";

const styles = require("./modal.scss");

export enum ModalTheme {
  Basic,
  Large,
  Full
}

export interface IModalProps {
  onClose: (event: any) => void;
  show: boolean;
  hideCloseButton?: boolean;
  header?: string;
  children?: React.ReactNode;
  theme?: ModalTheme;
  footer?: React.ReactNode;
  onScrollBottomCallback?: () => any;
}

export class Modal extends React.Component<IModalProps, {}> {
  public static defaultProps: Partial<IModalProps> = {
    show: false,
    theme: ModalTheme.Basic
  };
  public debouncedScrollHandler: ((e: any) => void) & _.Cancelable;
  private readonly el: HTMLElement;
  private modalRoot: HTMLElement;
  private modalNode: HTMLElement | undefined;

  constructor(props: IModalProps) {
    super(props);
    this.el = document.createElement("div");
    this.modalRoot = document.body as HTMLElement;
    this.debouncedScrollHandler = _.debounce(
      this.onScrollBottom.bind(this),
      50
    );
  }

  public componentWillReceiveProps(nextProps: IModalProps) {
    if (this.props.show !== nextProps.show) {
      this.controlBodyScrollable(nextProps.show);
    }
  }

  public componentDidMount() {
    this.modalRoot.appendChild(this.el);
    if (!!this.modalNode && !!this.props.onScrollBottomCallback) {
      this.modalNode.addEventListener("scroll", this.debouncedScrollHandler);
      window.addEventListener("resize", this.debouncedScrollHandler);
      this.debouncedScrollHandler(this.modalNode);
    }
  }

  public componentWillUnmount() {
    clearAllBodyScrollLocks();
    if (!!this.props.onScrollBottomCallback && !!this.modalNode) {
      this.modalNode.removeEventListener("scroll", this.debouncedScrollHandler);
      window.removeEventListener("resize", this.debouncedScrollHandler);
    }
    document.body.style.overflow = "auto";
    this.modalRoot.removeChild(this.el);
  }

  public render() {
    const modalStyle = classNames(styles.modal, {
      [styles.block]: this.props.show,
      [styles.none]: !this.props.show,
      [styles.largeTheme]: this.props.theme === ModalTheme.Large,
      [styles.fullTheme]: this.props.theme === ModalTheme.Full
    });

    const modalContent = (
      <div className={modalStyle}>
        <section className={styles.modalContent}>
          {!this.props.hideCloseButton && (
            <div className={styles.close} onClick={this.onClose}>
              <Icon type={"close"} />
            </div>
          )}
          <div className={styles.content}>{this.props.children}</div>
        </section>
        {this.props.footer && (
          <section className={styles.footer}>{this.props.footer}</section>
        )}
        <div className={styles.mask} onClick={this.onClickAway} />
      </div>
    );

    return createPortal(modalContent, this.el);
  }

  private onScrollBottom() {
    const scrollTop = this.modalNode!.scrollTop;
    const clientHeight = this.modalNode!.clientHeight;
    const scrollHeight = this.modalNode!.scrollHeight;
    // when we zoom the screen, scrollHeight and scrollTop + clientHeight
    // are not strictly equal. scrollTop will be a decimal not an integer.
    const didReachBottom =
      Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 1;
    if (didReachBottom && !!this.props.onScrollBottomCallback) {
      this.props.onScrollBottomCallback!();
    }
  }

  private onClose = (event: any) => {
    clearAllBodyScrollLocks();
    document.body.style.overflow = "auto";
    this.props.onClose(event);
  };

  private controlBodyScrollable = (show: boolean) => {
    if (show) {
      this.disableBodyScroll();
    } else {
      this.enableBodyScroll();
    }
  };

  private disableBodyScroll = () => {
    disableBodyScroll(document.body);
  };

  private enableBodyScroll = () => {
    enableBodyScroll(document.body);
  };

  private onClickAway = (e: any) => {
    if (this.isClickedOnFloatOrAbsuluteElement(e)) {
      return;
    }
    this.onClose(e);
  };

  private isClickedOnFloatOrAbsuluteElement(e: any) {
    const isElementClickedOnTimePicker =
      e!.target.tagName === "LI" ||
      e!.target.tagName === "UL" ||
      e.target.className.indexOf("rc-time-picker") !== -1;

    const isElementClickedOnDropdownOptionList =
      e.target.className.indexOf("dropdown") !== -1;

    return isElementClickedOnTimePicker || isElementClickedOnDropdownOptionList;
  }
}
