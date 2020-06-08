import classNames from "classnames";
import * as React from "react";
import { Size } from "../EnumValues";
import { Icon } from "../icons";

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
  inline?: boolean;
  icon?: string;
  link?: string;
  target?: LinkTarget;
  isNested?: boolean;
  greenStyling?: boolean;
}

export class Link extends React.Component<ILinkProps, {}> {
  public static defaultProps: Partial<ILinkProps> = {
    className: "",
    disabled: false,
    size: Size.Small,
    inline: false,
    target: LinkTarget.Self,
    link: "#"
  };

  public render() {
    let theme = "";

    const {
      greenStyling,
      size,
      link,
      label,
      icon,
      target,
      className,
      disabled,
      inline
    } = this.props;

    if (greenStyling) {
      theme = "Green";
    }

    const linkClassName = classNames(
      styles.link,
      styles[`${size}`],
      className,
      disabled ? styles.disabled : styles[`enabled${theme}`],
      inline ? styles[`inline${theme}`] : styles[`floating${theme}`]
    );

    return (
      <span className={linkClassName} onClick={this.handleOnClick}>
        <a href={link} target={target}>
          <span>{label}</span>
          {icon && <Icon className={styles.icon} type={icon} size={"16"} />}
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

    if (this.props.isNested) {
      e.stopPropagation();
    }
  };
}
