import * as React from "react";
import { Button } from "../button";
import { Size, Theme } from "../EnumValues";

const styles = require("./modalContent.scss");

export interface IModalContentProps {
  header?: string;
  subheader?: string | JSX.Element;
  notification?: string | JSX.Element;
  leftButtonLabel?: string;
  leftButtonOnClick?: any;
  isLeftBtnLoading?: boolean;
  leftButtonTheme?: Theme;
  rightButtonLabel?: string;
  rightButtonOnClick?: any;
  isRightBtnLoading?: boolean;
  rightButtonTheme?: Theme;
}

export class ModalContent extends React.Component<IModalContentProps, {}> {
  public render() {
    return (
      <div className={styles.notice}>
        {this.props.header && <header>{this.props.header}</header>}
        {this.props.subheader && this.getSubheader(this.props.subheader)}
        {this.props.notification &&
          this.getNotification(this.props.notification)}
        {(this.props.leftButtonLabel || this.props.rightButtonLabel) && (
          <div
            className={`${styles.modalFooter} ${
              this.props.rightButtonLabel ? styles.twoBtnFooter : ""
            }`}
          >
            {this.props.leftButtonLabel && (
              <Button
                className={styles.modalButton}
                label={this.props.leftButtonLabel}
                onClick={this.props.leftButtonOnClick}
                size={Size.Large}
                theme={this.props.leftButtonTheme || Theme.Ghost}
                loading={this.props.isLeftBtnLoading}
              />
            )}
            {this.props.rightButtonLabel && (
              <Button
                className={styles.modalButton}
                label={this.props.rightButtonLabel}
                onClick={this.props.rightButtonOnClick}
                size={Size.Large}
                theme={this.props.rightButtonTheme || Theme.Primary}
                loading={this.props.isRightBtnLoading}
              />
            )}
          </div>
        )}
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

  private getNotification(notification: string | JSX.Element): React.ReactNode {
    if (typeof notification === "string") {
      return <p className={styles.notification}>{notification}</p>;
    } else {
      return <div className={styles.notification}>{notification}</div>;
    }
  }
}
