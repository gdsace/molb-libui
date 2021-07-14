import classNames from "classnames";
import * as React from "react";
import { ColourTheme } from "../EnumValues";

let styles = require("./sidebar.scss");

export interface ILabelType {
  title: React.ReactNode;
  path?: string;
  isSectionHeader?: boolean;
}

export interface ISidebarProps {
  list: ILabelType[];
  selectedIndex?: number;
  onItemClick?: (index: number) => void;
  type?: "menu" | "indicator";
  greenStyling?: boolean;
  theme?: ColourTheme;
}

export class Sidebar extends React.Component<ISidebarProps, {}> {
  public static defaultProps: Partial<ISidebarProps> = {
    selectedIndex: 0,
    type: "menu",
    theme: ColourTheme.PURPLE
  };

  public render() {
    const { list, selectedIndex } = this.props;
    if (this.props.greenStyling) {
      styles = require("./greenStyleSidebar.scss");
    }
    const typeClass = styles[`${this.props.type}Item`];
    const sidebarStyle = classNames(styles.sidebar, {
      [styles.blue]: this.props.theme === ColourTheme.BLUE,
      [styles.green]: this.props.theme === ColourTheme.GREEN
    });
    return (
      <div className={sidebarStyle}>
        <ul>
          {list.map((item, index) => {
            const itemClassName = classNames(styles.item, typeClass, {
              [styles.clickable]: this.props.onItemClick && !item.isSectionHeader
            });
            const listItemClassname = classNames("", {
              [styles.activeItem]: selectedIndex === index,
              [styles.sectionHeader]: item.isSectionHeader
            });

            return (
              <li key={index} className={listItemClassname} onClick={this.onItemClick(index)}>
                <div className={itemClassName}>{item.title}</div>
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
