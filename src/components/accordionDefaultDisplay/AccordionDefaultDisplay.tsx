import ClassNames from "classnames/bind";
import { isUndefined } from "lodash";
import React from "react";

// tslint:disable-next-line:no-duplicate-imports
import { cloneDeep, map } from "lodash";
import { AccordionTheme } from "../EnumValues";
import { Icon } from "../icons";

const styles = require("./accordionDefaultDisplay.scss");
const cx = ClassNames.bind(styles).default || ClassNames.bind(styles);

export interface IAccordionProps {
  collapsed?: boolean;
  onPanelClick?: (collapsed: boolean) => any;
  title?: string | React.ReactNode;
  content?: React.ReactNode[] | string[] | React.ReactNode;
  theme: AccordionTheme;
  defaultDisplay?: number;
}

export interface IAccordionState {
  collapsed: boolean;
}

const themeClassMapper = {
  [AccordionTheme.Standard]: "standard",
  [AccordionTheme.Large]: "large",
  [AccordionTheme.Wrapped]: "wrapped"
};

export class AccordionDefaultDisplay extends React.Component<
  IAccordionProps,
  IAccordionState
> {
  public constructor(props: IAccordionProps) {
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
      <div className={cx("accordion", themeClassMapper[theme])}>
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
