import { ToastContainer } from "@src/components";
import classnames from "classnames";
import * as React from "react";

const styles = require("./layout.scss");

export interface ILayoutProps {
  hasNotifications?: boolean;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  mainContent?: React.ReactNode;
  sideBarStyle?: string;
  mainContentStyle?: string;
}

export class Layout extends React.Component<ILayoutProps, {}> {
  public static defaultProps: Partial<ILayoutProps> = {
    hasNotifications: false
  };

  public render() {
    return (
      <div className={styles.wrapper}>
        {this.props.hasNotifications && <ToastContainer newestOnTop />}
        {this.props.header}
        <div className={styles.content}>
          <div className={classnames(styles.sidebar, this.props.sideBarStyle)}>
            {this.props.sidebar}
          </div>
          <div
            className={classnames(
              styles.mainContent,
              this.props.mainContentStyle
            )}
          >
            {this.props.mainContent}
          </div>
        </div>
      </div>
    );
  }
}
