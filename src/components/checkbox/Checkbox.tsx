import * as React from "react";

const styles = require("./checkbox.scss");

export interface ICheckboxProps {
  onCheckboxClick: any;
  checked: boolean;
  disabled: boolean;
}

export class Checkbox extends React.Component<ICheckboxProps, {}> {
  public static defaultProps: Partial<ICheckboxProps> = {
    checked: false,
    disabled: false
  };

  public render() {
    const { checked, disabled } = this.props;
    return (
      <div className={styles.checkboxWrapper}>
        <span className={styles.checkbox}>
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className={styles.checkboxInput}
            onChange={this.onCheckboxClick}
          />
          <span className={styles.inner} />
        </span>
      </div>
    );
  }

  private onCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onCheckboxClick(event.target.checked);
  };
}
