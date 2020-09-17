import classNames from "classnames";
import * as React from "react";
import { CheckboxTheme } from "../EnumValues";

const styles = require("./checkbox.scss");

export interface ICheckboxProps {
  onCheckboxClick: any;
  checked: boolean;
  disabled: boolean;
  clickableElement?: JSX.Element | string;
  theme?: CheckboxTheme;
  addonBelow?: React.ReactNode;
  fieldName?: string;
  minusSign?: boolean;
}

interface ICheckboxState {
  checked: boolean;
}

export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  public static defaultProps: Partial<ICheckboxProps> = {
    checked: false,
    disabled: false,
    theme: CheckboxTheme.PURPLE
  };

  public static getDerivedStateFromProps = (props: ICheckboxProps, state: ICheckboxState) =>
    state.checked === props.checked ? null : { checked: props.checked };

  constructor(props: ICheckboxProps) {
    super(props);
    this.state = { checked: props.checked };
  }

  public render() {
    const { checked, disabled, theme, minusSign } = this.props;

    const checkboxInnerClass = classNames(
      minusSign ? styles.innerMinus : styles.innerDefault,
      styles.inner,
      styles[`${theme}`]
    );
    const checkboxInputClass = classNames(styles.checkboxInput, styles[`${theme}CheckBox`]);

    return (
      <div>
        <div className={styles.checkboxWrapper} data-scrollpoint={true}>
          <span className={styles.checkbox}>
            <input
              name={this.props.fieldName}
              type="checkbox"
              checked={checked}
              disabled={disabled}
              className={checkboxInputClass}
              onChange={this.onCheckboxClick}
              onClick={event => event.stopPropagation()}
            />
            <span className={checkboxInnerClass} />
          </span>
          {this.props.clickableElement && (
            <span className={styles.clickableElement} onClick={this.onClickableElementClick}>
              {this.props.clickableElement}
            </span>
          )}
        </div>
        {this.props.addonBelow && <div className={styles.addonBelow}>{this.props.addonBelow}</div>}
      </div>
    );
  }

  private onCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.onCheckedValueChange(event.target.checked);
  };

  private onClickableElementClick = () => {
    if (this.props.disabled) {
      return;
    }
    this.onCheckedValueChange(!this.state.checked);
  };

  private onCheckedValueChange(newValue: boolean) {
    this.setState({ checked: newValue });
    this.props.onCheckboxClick(newValue);
  }
}
