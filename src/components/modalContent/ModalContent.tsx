import * as React from "react";
import { Button } from "../button";
import { Size, Theme } from "../EnumValues";

const styles = require("./modalContent.scss");

export interface IModalContentProps {
  header?: string;
  subheader?: string | JSX.Element;
  leftButtonLabel?: string;
  leftButtonOnClick?: any;
  rightButtonLabel?: string;
  rightButtonOnClick?: any;
}

export class ModalContent extends React.Component<IModalContentProps, {}> {
  public render() {
    return (
      <div className={styles.notice}>
        {this.props.header && <header>{this.props.header}</header>}
        {this.props.subheader && this.getSubheader(this.props.subheader)}
        <div
          className={`${styles.modalFooter} ${
            this.props.rightButtonLabel ? styles.twoBtnFooter : ""
          }`}
        >
          {this.props.leftButtonLabel && (
            <Button
              className={styles.modalButton}
              label={this.props.leftButtonLabel}
              onClick={this.props.leftButtonOnClick(event)}
              size={Size.Large}
              theme={Theme.Ghost}
            />
          )}
          {this.props.rightButtonLabel && (
            <Button
              className={styles.modalButton}
              label={this.props.rightButtonLabel}
              onClick={this.props.rightButtonOnClick(event)}
              size={Size.Large}
              theme={Theme.Primary}
            />
          )}
        </div>
      </div>
    );
  }
  private getSubheader(subheader: string | JSX.Element): React.ReactNode {
    if (typeof subheader === "string") {
      return <p className={styles.subheader}>{subheader}</p>;
    } else {
      return <div className={styles.subheader}>{subheader}</div>;
    }
  }
}
