import * as React from "react";
import { Icon } from "../icons";

const styles = require("./navItem.scss");

export interface INavItem {
  type: string;
  label: string;
  onClick?: () => void;
}

export class NavItem extends React.Component<INavItem, {}> {
  public render() {
    return (
      <div className={styles.navLabel} onClick={this.onItemClick}>
        <Icon type={this.props.type} />
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
