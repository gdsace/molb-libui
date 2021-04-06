import * as React from "react";
import { Icon, IIconCategory } from "../icons";

const styles = require("./navItem.scss");

export interface INavItem {
  type: string;
  label: string;
  category?: IIconCategory;
  onClick?: () => void;
  showBadge?: boolean;
  badge?: React.ReactNode;
}

export class NavItem extends React.Component<INavItem, {}> {
  public render() {
    return (
      <div className={styles.navLabel} onClick={this.onItemClick}>
        <Icon category={this.props.category} type={this.props.type} />
        <label>{this.props.label}</label>
        {this.props.showBadge ? this.props.badge : null}
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
