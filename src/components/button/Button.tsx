import classNames from "classnames";
import * as React from "react";
import { Size, Theme } from "../EnumValues";
import { Icon } from "../icons";

const styles = require("./button.scss");

type ButtonType = "submit" | "reset" | "button";

export interface IButtonProps {
  onClick: () => any;
  label: string;
  disabled?: boolean;
  className?: string;
  size?: Size;
  theme?: Theme;
  type?: ButtonType;
  icon?: string;
  iconAlign?: "left" | "right";
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
      this.props.disabled ? styles.disabled : styles[`${this.props.theme}`],
      this.props.className
    );

    return (
      <button
        type={this.props.type}
        disabled={this.props.disabled}
        className={buttonClassName}
        onClick={() => this.handleOnClick(this.props.onClick)}
      >
        {this.renderContent()}
      </button>
    );
  }

  private renderContent() {
    const isLeftIcon = this.props.iconAlign === "left";
    const iconSize = this.props.size === Size.Small ? "16" : "24";

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
        {this.props.icon && !isLeftIcon && (
          <Icon
            className={styles.rightIcon}
            type={this.props.icon}
            size={iconSize}
          />
        )}
      </span>
    );
  }

  private handleOnClick = (onClick: () => any) => {
    if (!this.props.disabled && !this.props.loading) {
      onClick();
    }
  };
}
