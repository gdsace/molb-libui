import ClassNames from "classnames/bind";
import { cloneDeep, isUndefined, map } from "lodash";
import React from "react";

import { ExpandablePanelTheme } from "../EnumValues";
import { Icon } from "../icons";

const styles = require("./ExpandablePanel.scss");
const cx = ClassNames.bind(styles).default || ClassNames.bind(styles);

export interface IExpandablePanelProps {
  collapsed?: boolean;
  onPanelClick?: (collapsed: boolean) => any;
  title?: string | React.ReactNode;
  content?: React.ReactNode[] | string[] | React.ReactNode;
  theme: ExpandablePanelTheme;
  defaultDisplay?: number;
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
    const { title, theme } = this.props;
    return (
      <div className={cx("expandablePanel", themeClassMapper[theme])}>
        <div className={cx("panelHeader")} onClick={this.onPanelClick}>
          <span className={cx("panelTitle")}>{title}</span>
          <Icon
            type={collapsed ? "dropdown" : "up"}
            className={cx("collapseIcon")}
            size="20"
          />
        </div>
        {this.renderPanelContent(collapsed)}
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

  private renderPanelContent = (collapsed?: boolean) => {
    const { defaultDisplay, content } = this.props;
    const cloneContent = cloneDeep(content);
    if (!collapsed) {
      return this.renderContent(cloneContent);
    }
    if (collapsed && defaultDisplay && Array.isArray(cloneContent)) {
      const displayContent = cloneContent.splice(0, defaultDisplay);
      return this.renderContent(displayContent);
    }
  };

  private renderContent = (content?: string | React.ReactNode | string[]) => {
    if (content && Array.isArray(content)) {
      return map(content, item => (
        <div className={cx("panelContent")} key={JSON.stringify(item)}>
          {item}
        </div>
      ));
    }
    return <div className={cx("panelContent")}>{content}</div>;
  };
}
