import ClassNames from "classnames/bind";
import React, { Component, ReactNode, ReactNodeArray } from "react";
import { ExpandablePanelTheme } from "../EnumValues";
import { Icon } from "../icons";
import styles from "./ExpandablePanel.scss";

const cx = ClassNames.bind(styles).default || ClassNames.bind(styles);

export type ExpandablePanelProps = {
  theme: ExpandablePanelTheme;
  defaultDisplay: number;
  collapsed?: boolean;
  title?: ReactNode;
  subTitle?: ReactNode;
  children?: ReactNodeArray;
  onPanelClick?: (collapsed: boolean) => void;
};

export type ExpandablePanelState = {
  collapsed: boolean;
};
export class ExpandablePanel extends Component<
  ExpandablePanelProps,
  ExpandablePanelState
> {
  state = {
    collapsed: true
  };

  render() {
    const { title, theme, subTitle, defaultDisplay } = this.props;
    const collapsed =
      this.props.collapsed === undefined
        ? this.state.collapsed
        : this.props.collapsed;
    const children = React.Children.toArray(this.props.children);
    const iconType = collapsed ? "dropdown" : "up";
    const isShowSubTitle =
      defaultDisplay && children && children.length > defaultDisplay;
    const isShowChildren = defaultDisplay && collapsed && children;

    return (
      <div className={cx("expandablePanel", theme)}>
        <div className={cx("panelHeader")}>
          <div className={cx("panelTitle")}>{title}</div>
          {isShowSubTitle && (
            <div className={cx("subTitle")} onClick={this.onPanelClick}>
              <span>{subTitle}</span>
              <Icon type={iconType} className={cx("collapseIcon")} size="20" />
            </div>
          )}
        </div>
        {isShowChildren &&
          children.map((item, index: number) =>
            defaultDisplay && index < defaultDisplay ? item : null
          )}
        {!collapsed && this.props.children}
      </div>
    );
  }

  onPanelClick = () => {
    if (this.props.collapsed === undefined) {
      this.setState({
        collapsed: !this.state.collapsed
      });
    } else if (this.props.onPanelClick) {
      this.props.onPanelClick(!this.props.collapsed);
    }
  };
}
