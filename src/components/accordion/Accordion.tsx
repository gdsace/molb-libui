import ClassNames from "classnames/bind"; // TODO Consider Styled-Component as replacement
import React, { Component, ReactNode } from "react";
import { AccordionTheme } from "../EnumValues";
import { Icon } from "../icons";
import styles from "./accordion.scss";

const cx = ClassNames.bind(styles).default || ClassNames.bind(styles);
export type AccordionProps = {
  theme: AccordionTheme;
  collapsed?: boolean;
  header?: ReactNode;
  subHeader?: string[];
  content?: ReactNode;
  defaultCollapsed?: boolean;
  displayMode?: boolean;
  onPanelClick?: (collapsed: boolean) => void;
};

export type AccordionState = {
  collapsed: boolean;
};

export class Accordion extends Component<AccordionProps, AccordionState> {
  state = {
    collapsed: this.props.defaultCollapsed ? this.props.defaultCollapsed : false
  };

  render() {
    const collapsed = this.getCollapsedStatus();
    const iconType = collapsed ? "dropdown" : "up";
    const { header, content, theme, subHeader, displayMode } = this.props;

    return (
      <div className={cx("accordion", theme)}>
        <div className={cx("panelHeader")} onClick={this.onPanelClick}>
          <span className={cx("panelTitle")}>{header}</span>
          {!displayMode && (
            <div className={cx("subHeaderWithIcon")}>
              {this.renderSubHeader(subHeader, collapsed)}
              <Icon type={iconType} className={cx("collapseIcon")} />
            </div>
          )}
        </div>
        {!collapsed && <div className={cx("panelContent")}>{content}</div>}
      </div>
    );
  }

  getCollapsedStatus = () => {
    if (this.props.displayMode) {
      return false;
    } else if (this.props.collapsed === undefined) {
      return this.state.collapsed;
    } else {
      return this.props.collapsed;
    }
  };

  renderSubHeader = (
    subHeader: AccordionProps["subHeader"],
    collapsed: boolean
  ) => (
    <span className={cx("subHeader")}>
      {subHeader &&
        (subHeader.length === 1
          ? subHeader[0]
          : collapsed
          ? subHeader[0]
          : subHeader[1])}
    </span>
  );

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
