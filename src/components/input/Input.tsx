import classnames from "classnames";
import * as React from "react";
import { InputType, Size, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { Tooltips } from "../tooltips";
import { addLocatedErrorClassname } from "../utils";

const styles = require("./input.scss");

const DEFAULT_MAX_LENGTH = 30;
const defaultChangesFilterRegexDict: any = {
  [InputType.IntegerText]: /^-?(\d*)$/,
  [InputType.PositiveIntegerText]: /^(\d*)$/,
  [InputType.DecimalText]: /^-?([0-9]*|[0-9]+\.[0-9]*)$/,
  [InputType.PositiveDecimalText]: /^([0-9]*|[0-9]+\.[0-9]*)$/
};

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
  inlineElement?: JSX.Element | string;
  suffix?: string;
  showCharacterCount?: boolean;
  toolTipsContent?: JSX.Element | string;
  toolTipsPosition?: TooltipsLocationTheme;
  /*
   * This regex is to filter/reject the unexpected newValue changes (typed/pasted/...)
   * it's different from `Result-Value-Validating`.
   *
   * Note: Accepting `newValue` change does not mean this `newValue` is valid.
   * */
  customizedChangesFilterRegex?: RegExp;
}

export class Input extends React.Component<IInputProps, any> {
  public static defaultProps: Partial<IInputProps> = {
    className: "",
    disabled: false,
    maxLength: DEFAULT_MAX_LENGTH,
    minLength: 0,
    placeholder: "",
    size: Size.Medium,
    type: InputType.Text,
    showCharacterCount: false,
    showTooltip: false
  };

  constructor(props: any) {
    super(props);
    this.state = {
      characterCount: (this.props.value || "").toString().length,
      previousValue: ""
    };
  }

  public render() {
    const size = styles[`${this.props.size}`];
    const rootContainerClassname = classnames(styles.rootContainer, {
      [styles[`disabled`]]: this.props.disabled,
      [styles[`validationError`]]: this.props.showError
    });
    const showFooterSection =
      this.props.showError ||
      this.props.helperMsg ||
      this.props.showCharacterCount;
    return (
      <div
        className={rootContainerClassname}
        data-scrollpoint={this.props.label ? true : false}
      >
        {this.props.label && (
          <div className={styles.label}>
            <p>{this.props.label}</p>
            {this.props.showTooltip && (
              <Tooltips
                trigger={(open: boolean) => (
                  <Icon
                    type="help"
                    size="16"
                    className={classnames(
                      styles.labelIcon,
                      open && styles.openTooltip
                    )}
                  />
                )}
                position={
                  this.props.toolTipsPosition
                    ? this.props.toolTipsPosition
                    : TooltipsLocationTheme.BottomLeft
                }
                specializedPosition={true}
              >
                <div className={styles.toolTipsContent}>
                  {this.props.toolTipsContent}
                </div>
              </Tooltips>
            )}
          </div>
        )}
        <div className={styles.inline}>
          <input
            disabled={this.props.disabled}
            className={`${styles.field} ${size} ${this.props.className} ${
              this.props.showError ? styles.error : ""
            }`}
            value={this.props.value}
            type="text"
            maxLength={this.props.maxLength}
            onChange={this.handleOnChange}
            onBlur={() => {
              if (this.props.onBlur) {
                this.props.onBlur();
              }
            }}
            placeholder={this.props.placeholder}
          />
          {this.props.showError ? (
            <Icon className={styles.errorIcon} size="16" type="error" />
          ) : (
            this.props.suffix && (
              <span className={styles.suffix}>{this.props.suffix}</span>
            )
          )}
          {this.props.inlineElement}
        </div>
        {showFooterSection && (
          <div className={styles.footerSection}>
            <label
              className={`${
                this.props.showError
                  ? addLocatedErrorClassname(styles.redMsg)
                  : styles.helperMsg
              } ${styles.isEmpty}`}
            >
              {this.props.showError
                ? this.props.errorMsg
                : this.props.helperMsg}
            </label>
            {this.props.showCharacterCount && (
              <div className={styles.countMsg}>
                {`${this.state.characterCount}/${this.props.maxLength}`}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  public handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type, customizedChangesFilterRegex } = this.props;
    const newValue = event.target.value;
    const defaultChangesFilterRegex =
      type && defaultChangesFilterRegexDict[type];

    // first check defaultChangesFilterRegex,
    // then check customizedChangesFilterRegex after.
    if (
      (defaultChangesFilterRegex &&
        !defaultChangesFilterRegex.test(newValue)) ||
      (customizedChangesFilterRegex &&
        !customizedChangesFilterRegex.test(newValue))
    ) {
      event.target.value = this.state.previousValue;
      return;
    }

    if (
      this.props.disabled ||
      newValue.length > (this.props.maxLength || DEFAULT_MAX_LENGTH)
    ) {
      event.target.value = this.state.previousValue;
      return;
    }

    this.props.onChange(event);
    this.setState({
      characterCount: event.target.value.length,
      previousValue: event.target.value
    });
  };
}
