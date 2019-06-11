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
import { isIEDevice, isIOSDevice } from "../utils";

const styles = require("./modal.scss");

const htmlElement = document.getElementsByTagName("html")[0];
const modalHideXY = "XY";

export enum ModalTheme {
  Basic,
  Large,
  Full
}
export enum ModalIndex {
  Low,
  Normal,
  Middle,
  High,
  Higher
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
  zIndex?: ModalIndex;
  modalHideDirection?: string;
}

export class Modal extends React.Component<IModalProps, {}> {
  public static defaultProps: Partial<IModalProps> = {
    show: false,
    theme: ModalTheme.Basic,
    zIndex: ModalIndex.High
  };
  public debouncedScrollHandler: ((e: any) => void) & _.Cancelable;
  private readonly el: HTMLElement;
  private modalRoot: HTMLElement;
  private readonly setUpModalContentRef: (element: HTMLElement) => any;
  private modalNode: HTMLElement | undefined;
  private readonly setFooter: (element: HTMLElement) => any;
  private footer: HTMLElement | undefined;

  constructor(props: IModalProps) {
    super(props);
    this.el = document.createElement("div");
    this.modalRoot = document.body as HTMLElement;
    this.setUpModalContentRef = (element: HTMLElement) =>
      (this.modalNode = element);
    this.setFooter = (element: HTMLElement) => (this.footer = element);
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

  public componentDidUpdate(prevProps: IModalProps) {
    if (this.props.show && this.props.show !== prevProps.show) {
      this.onScrollBottom();
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
    if (!this.props.show) {
      return null;
    }
    const modalStyle = classNames(styles.modal, {
      [styles.block]: this.props.show,
      [styles.none]: !this.props.show,
      [styles.largeTheme]: this.props.theme === ModalTheme.Large,
      [styles.fullTheme]: this.props.theme === ModalTheme.Full,
      [styles.LowIndex]: this.props.zIndex === ModalIndex.Low,
      [styles.normalIndex]: this.props.zIndex === ModalIndex.Normal,
      [styles.middleIndex]: this.props.zIndex === ModalIndex.Middle,
      [styles.highIndex]: this.props.zIndex === ModalIndex.High,
      [styles.higherIndex]: this.props.zIndex === ModalIndex.Higher,
      [styles.modalHiddenXY]: this.props.modalHideDirection === modalHideXY
    });
    const modalContent = (
      <div className={modalStyle} onClick={this.onClickAway}>
        <section
          className={styles.modalContent}
          ref={this.setUpModalContentRef}
        >
          {!this.props.hideCloseButton && (
            <div className={styles.close} onClick={this.onClose}>
              <Icon type={"close"} />
            </div>
          )}
          <div className={styles.content}>{this.props.children}</div>
        </section>
        {this.props.footer && (
          <section ref={this.setFooter} className={styles.footer}>
            {this.props.footer}
          </section>
        )}
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
    if (isIOSDevice || isIEDevice()) {
      disableBodyScroll(document.body);
    } else {
      htmlElement.style.overflow = "hidden";
    }
  };

  private enableBodyScroll = () => {
    if (isIOSDevice || isIEDevice()) {
      enableBodyScroll(document.body);
    } else {
      htmlElement.style.overflow = "auto";
    }
  };

  private onClickAway = (e: any) => {
    if (this.isClickedElementInModalBox(e)) {
      return;
    }
    if (this.isClickedOnFloatOrAbsoluteElement(e)) {
      return;
    }
    this.onClose(e);
  };

  private isClickedElementInModalBox(e: any) {
    return (
      (this.modalNode && this.modalNode.contains(e.target)) ||
      (this.footer && this.footer.contains(e.target)) ||
      this.props.hideCloseButton
    );
  }

  private isClickedOnFloatOrAbsoluteElement(e: any) {
    return (
      e!.target.tagName === "LI" ||
      e!.target.tagName === "UL" ||
      e.target.className.indexOf("react-datepicker") !== -1 ||
      e.target.className.indexOf("rc-time-picker") !== -1 ||
      e.target.className.indexOf("dropdown") !== -1
    );
  }
}
