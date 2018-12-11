import { LinkStatus, Size } from "@libui/components/EnumValues";
import { Icon } from "@libui/components/icons";
import classNames from "classnames";
import * as React from "react";

const styles = require("./link.scss");

export enum LinkTarget {
  Self = "_self",
  Blank = "_blank",
  Parent = "_parent",
  Top = "_top"
}

export interface ILinkProps {
  onClick?: () => any;
  label: string;
  disabled?: boolean;
  className?: string;
  size?: Size;
  icon?: string;
  status?: LinkStatus;
  link?: string;
  target?: LinkTarget;
}

export class Link extends React.Component<ILinkProps, {}> {
  public static defaultProps: Partial<ILinkProps> = {
    className: "",
    disabled: false,
    size: Size.Small,
    status: LinkStatus.Normal,
    target: LinkTarget.Self,
    link: "#"
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
        <a href={this.props.link} target={this.props.target}>
          <span>{this.props.label}</span>
          {this.props.icon && (
            <Icon className={styles.icon} type={this.props.icon} size={"16"} />
          )}
        </a>
      </span>
    );
  }

  private handleOnClick = (e: React.MouseEvent) => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  };
}
