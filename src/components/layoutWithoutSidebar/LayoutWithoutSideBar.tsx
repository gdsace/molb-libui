import { ToastContainer } from "@src/components";
import * as React from "react";

const styles = require("./layoutWithoutSidebar.scss");

export interface ILayoutWithoutSideBarProps {
  hasNotifications?: boolean;
  header?: React.ReactNode;
  mainContent?: React.ReactNode;
  className?: string;
}

export class LayoutWithoutSideBar extends React.Component<
  ILayoutWithoutSideBarProps,
  {}
> {
  public static defaultProps: Partial<ILayoutWithoutSideBarProps> = {
    hasNotifications: false
  };

  public render() {
    return (
      <div className={styles.wrapper}>
        {this.props.hasNotifications && <ToastContainer newestOnTop />}
        {this.props.header}
        <div className={styles.content}>
          <div className={styles.mainContent}>{this.props.mainContent}</div>
        </div>
      </div>
    );
  }
}
