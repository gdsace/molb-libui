import classNames from "classnames";
import * as React from "react";
import { Icon, IIconCategory } from "../icons";

const styles = require("./flatButton.scss");

export interface IFlatButtonProps {
  onClick: () => any;
  iconType: string;
  label: string;
  iconCategory?: IIconCategory;
  disabled?: boolean;
  containerClassName?: string;
}

export class FlatButton extends React.Component<IFlatButtonProps, {}> {
  public static defaultProps: Partial<IFlatButtonProps> = {
    containerClassName: "",
    disabled: false
  };

  public render() {
    const { containerClassName, disabled, onClick, iconType } = this.props;
    const buttonClassName = classNames(
      styles.rootContainer,
      containerClassName,
      {
        [styles.disabled]: disabled
      }
    );

    return (
      <div className={styles.rootWrapper}>
        <div
          className={buttonClassName}
          onClick={() => this.handleOnClick(onClick)}
        >
          <Icon type={iconType} size={"24"} className={styles.icon} />
          <span className={styles.label}>{this.props.label}</span>
        </div>
      </div>
    );
  }

  private handleOnClick = (onClick: () => any) => {
    if (!this.props.disabled) {
      onClick();
    }
  };
}
