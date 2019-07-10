import ClassNames from "classnames/bind";
import { isUndefined } from "lodash";
import React from "react";

import { AccordionTheme } from "../EnumValues";
import { Icon } from "../icons";

const styles = require("./accordion.scss");
const cx = ClassNames.bind(styles).default || ClassNames.bind(styles);

export interface IAccordionProps {
  collapsed?: boolean;
  onPanelClick?: (collapsed: boolean) => any;
  header?: string | React.ReactNode;
  subHeader?: string[];
  content?: string | React.ReactNode;
  theme: AccordionTheme;
  defaultCollapsed?: boolean;
}

export interface IAccordionState {
  collapsed: boolean;
}

const themeClassMapper = {
  [AccordionTheme.Standard]: "standard",
  [AccordionTheme.Large]: "large",
  [AccordionTheme.Wrapped]: "wrapped",
  [AccordionTheme.Colored]: "colored"
};

export class Accordion extends React.Component<
  IAccordionProps,
  IAccordionState
> {
  public constructor(props: IAccordionProps) {
    super(props);
    this.state = {
      collapsed: props.defaultCollapsed ? props.defaultCollapsed : false
    };
  }

  public render() {
    const collapsed = isUndefined(this.props.collapsed)
      ? this.state.collapsed
      : this.props.collapsed;
    const { header, content, theme, subHeader } = this.props;
    return (
      <div className={cx("accordion", themeClassMapper[theme])}>
        <div className={cx("panelHeader")} onClick={this.onPanelClick}>
          <span className={cx("panelTitle")}>{header}</span>
          <div className={cx("subHeaderWithIcon")}>
            {this.renderSubHeader(subHeader, collapsed)}
            {collapsed ? (
              <Icon type={"dropdown"} className={cx("collapseIcon")} />
            ) : (
              <Icon type={"up"} className={cx("collapseIcon")} />
            )}
          </div>
        </div>
        {!collapsed && <div className={cx("panelContent")}>{content}</div>}
      </div>
    );
  }

  private renderSubHeader = (
    subHeader: IAccordionProps["subHeader"],
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
