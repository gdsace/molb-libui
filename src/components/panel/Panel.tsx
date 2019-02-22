import classnames from "classnames";
import React from "react";
import { PanelTheme, PanelType } from "../EnumValues";

const styles = require("./panel.scss");

export interface IPanelProps {
  containerStyle?: string;
  contentStyle?: string;
  children?: React.ReactNode;
  type?: PanelType;
  theme?: PanelTheme;
}

export class Panel extends React.Component<IPanelProps, {}> {
  public static defaultProps: Partial<IPanelProps> = {
    type: PanelType.Sidebar,
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
        <div
          className={classnames(
            {
              [styles.onepagePanel]: this.props.type === PanelType.Onepage,
              [styles.sidebarPanel]: this.props.type === PanelType.Sidebar,
              [styles.reviewModel]: this.props.theme === PanelTheme.ReviewModel
            },
            this.props.contentStyle
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
