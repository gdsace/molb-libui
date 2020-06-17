import classNames from "classnames";
import * as React from "react";
import { Size, Theme } from "../EnumValues";
import { Icon } from "../icons";

const styles = require("./button.scss");

type ButtonType = "submit" | "reset" | "button";

export interface IButtonProps {
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => any;
  label: string;
  disabled?: boolean;
  className?: string;
  size?: Size;
  theme?: Theme;
  type?: ButtonType;
  icon?: string;
  iconAlign?: "left" | "right" | "center";
  children?: React.ReactNode;
  loading?: boolean;
}

export class Button extends React.Component<IButtonProps, {}> {
  public static defaultProps: Partial<IButtonProps> = {
    type: "submit",
    className: "",
    disabled: false,
    size: Size.Small,
    theme: Theme.Ghost,
    iconAlign: "left",
    loading: false
  };

  public render() {
    const buttonClassName = classNames(
      styles.button,
      styles[`${this.props.size}`],
      this.props.disabled
        ? this.props.theme === Theme.Grey
          ? styles.disabledGrey
          : this.props.theme === Theme.DarkGrey
          ? styles.disabledDarkGrey
          : styles.disabled
        : styles[`${this.props.theme}`],
      this.props.className
    );

    return (
      <button
        type={this.props.type}
        disabled={this.props.disabled}
        className={buttonClassName}
        onClick={this.handleOnClick}
      >
        {this.renderContent()}
      </button>
    );
  }

  private renderContent() {
    const isLeftIcon = this.props.iconAlign === "left";
    const isRightIcon = this.props.iconAlign === "right";
    const isCenterIcon = this.props.iconAlign === "center";
    const iconSize =
      this.props.size === Size.Small
        ? "16"
        : this.props.size === Size.Square ||
          this.props.size === Size.SmallSquare
        ? "16"
        : "24";

    return this.props.loading ? (
      <span className={styles.buttonContent}>
        <Icon className={styles.loading} type="progress" size={iconSize} />
      </span>
    ) : (
      <span className={styles.buttonContent}>
        {this.props.children}
        {this.props.icon && isLeftIcon && (
          <Icon
            className={styles.leftIcon}
            type={this.props.icon}
            size={iconSize}
          />
        )}
        <span>{this.props.label}</span>
        {this.props.icon && isRightIcon && (
          <Icon
            className={styles.rightIcon}
            type={this.props.icon}
            size={iconSize}
          />
        )}
        {this.props.icon && isCenterIcon && (
          <Icon type={this.props.icon} size={iconSize} />
        )}
      </span>
    );
  }

  private handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!this.props.disabled && !this.props.loading && this.props.onClick) {
      this.props.onClick(event);
    }
  };
}
