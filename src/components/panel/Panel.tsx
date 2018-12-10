import React from "react";

import classnames from "classnames";

const styles = require("./panel.scss");

export interface IPanelProps {
  className?: string;
  children?: React.ReactNode;
}

export class Panel extends React.Component<IPanelProps, {}> {
  public render() {
    const panelClassname = classnames(styles.panel, this.props.className);
    return <div className={panelClassname}>{this.props.children}</div>;
  }
}
