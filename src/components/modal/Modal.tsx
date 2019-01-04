import * as React from "react";
import { createPortal } from "react-dom";

import classNames from "classnames";
import { Icon } from "../icons";

const styles = require("./modal.scss");

export enum ModalTheme {
  BASIC,
  Large
}

export interface IModalProps {
  onClose: () => void;
  show: boolean;
  header?: string;
  children?: React.ReactNode;
  theme?: ModalTheme;
}

export class Modal extends React.Component<IModalProps, {}> {
  public static defaultProps: Partial<IModalProps> = {
    show: false,
    theme: ModalTheme.BASIC
  };
  private readonly el: HTMLElement;
  private modalRoot: HTMLElement;
  private setUpModalContentRef: (element: HTMLElement) => any;
  private modalNode: HTMLElement | undefined;

  constructor(props: IModalProps) {
    super(props);
    this.el = document.createElement("div");
    this.modalRoot = document.getElementById("modal-root") as HTMLElement;
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
      [styles.largeTheme]: this.props.theme === ModalTheme.Large
    });

    document.body.style.overflow = this.props.show ? "hidden" : "auto";

    const modalContent = (
      <div className={modalStyle} onClick={this.onClickAway}>
        <section
          className={styles.modalContent}
          ref={this.setUpModalContentRef}
        >
          <header className={styles.header}>
            <div className={styles.close} onClick={() => this.props.onClose()}>
              <Icon type={"close"} />
            </div>
          </header>
          <div className={styles.content}>{this.props.children}</div>
        </section>
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
