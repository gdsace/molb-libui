import { InputType, Size } from "@libui/components/EnumValues";
import * as React from "react";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const styles = require("./input.scss");

export interface IInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: () => any;
  value: any;
  type?: InputType;
  minLength?: number;
  maxLength?: number;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  showError?: boolean;
  size?: Size;
  errorMsg?: string;
  showHelper?: boolean;
  helperMsg?: string;
  showTooltip?: boolean;
  suffix?: string;
}

export class Input extends React.Component<IInputProps, {}> {
  public static defaultProps: Partial<IInputProps> = {
    className: "",
    disabled: false,
    maxLength: 255,
    minLength: 255,
    placeholder: "",
    size: Size.Medium,
    type: InputType.Text
  };

  public render() {
    const size = styles[`${this.props.size}`];
    return (
      <div
        className={styles.input}
        data-scrollpoint={this.props.label ? true : false}
      >
        {this.props.label && (
          <div className={styles.label}>
            <p>{this.props.label}</p>
            {this.props.showTooltip && <Icon type="help" />}
          </div>
        )}
        <div className={styles.inline}>
          <input
            disabled={this.props.disabled}
            className={`${styles.field} ${size} ${this.props.className} ${
              this.props.showError ? styles.error : ""
            }`}
            value={this.props.value}
            type={this.props.type}
            maxLength={this.props.maxLength}
            onChange={event => this.handleOnChange(event)}
            onBlur={() => {
              if (this.props.onBlur) {
                this.props.onBlur();
              }
            }}
            placeholder={this.props.placeholder}
          />
          {this.props.showError ? (
            <Icon className={styles.errorIcon} type="error" />
          ) : (
            this.props.suffix && (
              <span className={styles.suffix}>{this.props.suffix}</span>
            )
          )}
        </div>
        <label
          className={`${
            this.props.showError
              ? addLocatedErrorClassname(styles.errorMsg)
              : styles.helperMsg
          } ${styles.isEmpty}`}
        >
          {this.props.showError ? this.props.errorMsg : this.props.helperMsg}
        </label>
      </div>
    );
  }

  public handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (
      this.props.disabled ||
      newValue.length > (this.props.maxLength || 255)
    ) {
      return;
    }
    this.props.onChange(event);
  };
}
