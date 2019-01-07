import classNames from "classnames";
import * as React from "react";
import { Icon, IIconProps } from "../icons";

const styles = require("./iconButton.scss");

export interface IIconButtonProps extends IIconProps {
  onClick: () => any;
  disabled?: boolean;
  iconClassName?: string;
}

export class IconButton extends React.Component<IIconButtonProps, {}> {
  public static defaultProps: Partial<IIconButtonProps> = {
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
    const iconButtonClassName = classNames(
      styles.iconButtonContainer,
      className,
      {
        [styles.disabled]: disabled
      }
    );

    return (
      <div
        className={iconButtonClassName}
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
