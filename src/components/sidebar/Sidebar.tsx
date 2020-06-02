import * as React from "react";

let styles = require("./sidebar.scss");

interface ILabelType {
  title: React.ReactNode;
  path?: string;
}

export interface ISidebarProps {
  list: ILabelType[];
  selectedIndex?: number;
  onItemClick?: any;
  type?: "menu" | "indicator";
  alternativeStyle?: boolean;
}

export class Sidebar extends React.Component<ISidebarProps, {}> {
  public static defaultProps: Partial<ISidebarProps> = {
    selectedIndex: 0,
    type: "menu"
  };

  public render() {
    const { list, selectedIndex } = this.props;
    if (this.props.alternativeStyle) styles = require("./greenStyleSidebar.scss")
    const typeClass = styles[`${this.props.type}Item`];
    const itemClassName = `${styles.item} ${typeClass}${
      this.props.onItemClick ? " " + styles.clickable : ""
    }`;

    return (
      <div className={styles.sidebar}>
        <ul>
          {list.map((item, index) => (
            <li
              key={index}
              className={`${selectedIndex === index ? styles.activeItem : ""}`}
              onClick={this.onItemClick(index)}
            >
              <div className={itemClassName}>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private onItemClick = (index: number) => () => {
    const { onItemClick } = this.props;
    if (onItemClick) {
      onItemClick(index);
    }
  };
}
