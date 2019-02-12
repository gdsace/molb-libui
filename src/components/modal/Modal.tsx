import * as React from "react";
import { createPortal } from "react-dom";

import classNames from "classnames";
import { Icon } from "../icons";

const styles = require("./modal.scss");

export enum ModalTheme {
  Basic,
  Large,
  Full
}

export interface IModalProps {
  onClose: () => void;
  show: boolean;
  header?: string;
  children?: React.ReactNode;
  theme?: ModalTheme;
  footer?: React.ReactNode;
}

export class Modal extends React.Component<IModalProps, {}> {
  public static defaultProps: Partial<IModalProps> = {
    show: false,
    theme: ModalTheme.Basic
  };
  private readonly el: HTMLElement;
  private modalRoot: HTMLElement;
  private readonly setUpModalContentRef: (element: HTMLElement) => any;
  private modalNode: HTMLElement | undefined;

  constructor(props: IModalProps) {
    super(props);
    this.el = document.createElement("div");
    this.modalRoot = document.body as HTMLElement;
    this.setUpModalContentRef = (element: HTMLElement) =>
      (this.modalNode = element);
  }

  public componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  public componentWillUnmount() {
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

    document.body.style.overflow = this.props.show ? "hidden" : "auto";

    const modalContent = (
      <div className={modalStyle} onClick={this.onClickAway}>
        <section
          className={styles.modalContent}
          ref={this.setUpModalContentRef}
        >
          <div className={styles.close} onClick={() => this.props.onClose()}>
            <Icon type={"close"} />
          </div>
          <div className={styles.content}>{this.props.children}</div>
        </section>
        {this.props.footer && (
          <div className={styles.footer}>{this.props.footer}</div>
        )}
      </div>
    );

    return createPortal(modalContent, this.el);
  }

  private onClickAway = (e: any) => {
    if (this.modalNode && this.modalNode.contains(e.target)) {
      return;
    }
    this.props.onClose();
  };
}
