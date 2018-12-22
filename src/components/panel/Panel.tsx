import React from "react";

import classnames from "classnames";

const styles = require("./panel.scss");

export interface IPanelProps {
  containerStyle?: string;
  contentStyle?: string;
  children?: React.ReactNode;
}

export class Panel extends React.Component<IPanelProps, {}> {
  public render() {
    return (
      <div
        className={classnames(styles.panelContainer, this.props.containerStyle)}
      >
        <div className={classnames(styles.panel, this.props.contentStyle)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
