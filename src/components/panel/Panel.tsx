import classnames from "classnames";
import React from "react";

import { PanelTheme } from "@src/components/EnumValues";

const styles = require("./panel.scss");

export interface IPanelProps {
  containerStyle?: string;
  contentStyle?: string;
  children?: React.ReactNode;
  theme?: PanelTheme;
}

export class Panel extends React.Component<IPanelProps, {}> {
  public static defaultProps: Partial<IPanelProps> = {
    theme: PanelTheme.Normal
  };

  public render() {
    return (
      <div
        className={classnames(
          styles.panelContainer,
          styles[`${this.props.theme}`],
          this.props.containerStyle
        )}
      >
        <div className={classnames(styles.panel, this.props.contentStyle)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
