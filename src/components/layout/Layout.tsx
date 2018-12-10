import * as React from "react";

const styles = require("./layout.scss");

export interface ILayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  mainContent?: React.ReactNode;
  className?: string;
}

export class Layout extends React.Component<ILayoutProps, {}> {
  public render() {
    return (
      <div className={styles.wrapper}>
        {this.props.header}
        <div className={styles.content}>
          <div className={`${styles.sidebar} ${this.props.className}`}>
            {this.props.sidebar}
          </div>
          <div className={styles.mainContent}>{this.props.mainContent}</div>
        </div>
      </div>
    );
  }
}
