import { Icon, IIconProps } from "@src/components/icons";
import classNames from "classnames";
import * as React from "react";

const styles = require("./buttonIcon.scss");

export interface IButtonIconProps extends IIconProps {
  onClick: () => any;
  disabled: boolean;
  iconClassName?: string;
}

export class ButtonIcon extends React.Component<IButtonIconProps, {}> {
  public static defaultProps: Partial<IButtonIconProps> = {
    className: "",
    disabled: false,
    iconClassName: "",
    category: undefined,
    size: "",
    viewBox: ""
  };

  public render() {
    const {
      className,
      disabled,
      type,
      iconClassName,
      category,
      size,
      viewBox,
      onClick
    } = this.props;
    const buttonIconClassName = classNames(
      styles.buttonIconContainer,
      className,
      {
        [styles.disabled]: disabled
      }
    );

    return (
      <div
        className={buttonIconClassName}
        onClick={() => this.handleOnClick(onClick)}
      >
        <Icon
          className={iconClassName}
          category={category}
          type={type}
          size={size}
          viewBox={viewBox}
        />
      </div>
    );
  }

  private handleOnClick = (onClick: () => any) => {
    if (!this.props.disabled) {
      onClick();
    }
  };
}
