import ClassNames from "classnames/bind";
import { isUndefined, map } from "lodash";
import React from "react";

import { ExpandablePanelTheme } from "../EnumValues";
import { Icon } from "../icons";

const styles = require("./ExpandablePanel.scss");
const cx = ClassNames.bind(styles).default || ClassNames.bind(styles);

export interface IExpandablePanelProps {
  collapsed?: boolean;
  onPanelClick?: (collapsed: boolean) => any;
  title?: string | React.ReactNode;
  theme: ExpandablePanelTheme;
  defaultDisplay?: number;
  subTitle?: string;
  children?: React.ReactNodeArray | React.ReactNode;
}

export interface IExpandablePanelState {
  collapsed: boolean;
}

const themeClassMapper = {
  [ExpandablePanelTheme.Standard]: "standard",
  [ExpandablePanelTheme.Large]: "large"
};

export class ExpandablePanel extends React.Component<
  IExpandablePanelProps,
  IExpandablePanelState
> {
  public constructor(props: IExpandablePanelProps) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  public render() {
    const collapsed = isUndefined(this.props.collapsed)
      ? this.state.collapsed
      : this.props.collapsed;
    const { title, theme, subTitle, defaultDisplay } = this.props;
    const children = React.Children.toArray(this.props.children);
    return (
      <div className={cx("expandablePanel", themeClassMapper[theme])}>
        <div className={cx("panelHeader")}>
          <div className={cx("panelTitle")}>{title}</div>
          {defaultDisplay && children && children.length > defaultDisplay && (
            <div className={cx("subTitle")} onClick={this.onPanelClick}>
              <span className={cx("panelTitle")}>{subTitle}</span>
              <Icon
                type={collapsed ? "dropdown" : "up"}
                className={cx("collapseIcon")}
                size="20"
              />
            </div>
          )}
        </div>
        {collapsed &&
          children &&
          defaultDisplay &&
          map(children, (item: any, index: number) =>
            index < defaultDisplay ? item : null
          )}
        {!collapsed && this.props.children}
      </div>
    );
  }

  private onPanelClick = () => {
    if (isUndefined(this.props.collapsed)) {
      this.setState({
        collapsed: !this.state.collapsed
      });
    } else if (this.props.onPanelClick) {
      this.props.onPanelClick(!this.props.collapsed);
    }
  };
}
