import classnames from "classnames";
import * as React from "react";
import { ToastContainer } from "../notification";

const styles = require("./layout.scss");

export interface ILayoutProps {
  hasNotifications?: boolean;
  header?: React.ReactNode;
  showSideBar?: boolean;
  sidebar?: React.ReactNode;
  sideBarStyle?: string;
  mainContent?: React.ReactNode;
  mainContentStyle?: string;
  footer?: React.ReactNode;
}

export class Layout extends React.Component<ILayoutProps, {}> {
  public static defaultProps: Partial<ILayoutProps> = {
    hasNotifications: false,
    showSideBar: true
  };

  public render() {
    return (
      <div className={styles.wrapper}>
        {this.props.hasNotifications && <ToastContainer newestOnTop />}
        {this.props.header}
        <div className={styles.content}>
          {this.props.showSideBar && (
            <div
              className={classnames(styles.sidebar, this.props.sideBarStyle)}
            >
              {this.props.sidebar}
            </div>
          )}
          <div
            className={classnames(
              styles.mainContent,
              this.props.mainContentStyle
            )}
          >
            {this.props.mainContent}
          </div>
        </div>
        {this.props.footer}
      </div>
    );
  }
}
