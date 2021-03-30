import classNames from "classnames";
import * as React from "react";
import { SidebarTheme } from "../EnumValues";

let styles = require("./sidebar.scss");

interface ILabelType {
  title: React.ReactNode;
  isSectionHeader?: boolean;
}

export interface ISidebarProps {
  list: ILabelType[];
  selectedIndex?: number;
  onItemClick?: (index: number) => void;
  type?: "menu" | "indicator";
  greenStyling?: boolean;
  theme?: SidebarTheme;
}

export class Sidebar extends React.Component<ISidebarProps, {}> {
  public static defaultProps: Partial<ISidebarProps> = {
    selectedIndex: 0,
    type: "menu",
    theme: SidebarTheme.PURPLE
  };

  public render() {
    const { list, selectedIndex } = this.props;
    if (this.props.greenStyling) {
      styles = require("./greenStyleSidebar.scss");
    }
    const typeClass = styles[`${this.props.type}Item`];
    const sidebarStyle = classNames(
      styles.sidebar,
      this.props.theme === SidebarTheme.BLUE ? styles.blue : null,
      this.props.theme === SidebarTheme.GREEN ? styles.green : null
    );
    return (
      <div className={sidebarStyle}>
        <ul>
          {list.map((item, index) => {
            const itemClassName = classNames(styles.item, typeClass, {
              [styles.clickable]: this.props.onItemClick && !item.isSectionHeader,
              [styles.activeItem]: selectedIndex === index,
              [styles.sectionHeader]: item.isSectionHeader
            });

            return (
              <li key={index} className={itemClassName} onClick={this.onItemClick(index)}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  private onItemClick = (index: number) => () => {
    if (this.props.onItemClick) {
      this.props.onItemClick(index);
    }
  };
}
