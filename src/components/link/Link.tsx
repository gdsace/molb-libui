import { LinkStatus, Size } from "@libui/components/EnumValues";
import { Icon } from "@libui/components/icons";
import classNames from "classnames";
import * as React from "react";

const styles = require("./link.scss");

export interface ILinkProps {
  onClick: () => any;
  label: string;
  disabled?: boolean;
  className?: string;
  size?: Size;
  icon?: string;
  status?: LinkStatus;
}

export class Link extends React.Component<ILinkProps, {}> {
  public static defaultProps: Partial<ILinkProps> = {
    className: "",
    disabled: false,
    size: Size.Small,
    status: LinkStatus.Normal
  };

  public render() {
    const linkClassName = classNames(
      styles.link,
      styles[`${this.props.size}`],
      this.props.className,
      this.props.disabled ? styles.disabled : styles.enable,
      styles[`${this.props.status}`]
    );

    return (
      <span className={linkClassName} onClick={this.handleOnClick}>
        <span>{this.props.label}</span>
        {this.props.icon && (
          <Icon className={styles.icon} type={this.props.icon} size={"16"} />
        )}
      </span>
    );
  }

  private handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick();
    }
  };
}
