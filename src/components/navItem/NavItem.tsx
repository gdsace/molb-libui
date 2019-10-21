import * as React from "react";
import { Icon, IIconCategory } from "../icons";

const styles = require("./navItem.scss");

export interface INavItem {
  type: string;
  label: string;
  category?: IIconCategory;
  onClick?: () => void;
}

export class NavItem extends React.Component<INavItem, {}> {
  public render() {
    return (
      <div className={styles.navLabel} onClick={this.onItemClick}>
        <Icon category={this.props.category} type={this.props.type} />
        <label>{this.props.label}</label>
      </div>
    );
  }

  private onItemClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  };
}
