import classnames from "classnames";
import * as React from "react";
import { InputType, Size, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { Tooltips } from "../tooltips";
import { addLocatedErrorClassname } from "../utils";

const styles = require("./input.scss");

const ICON_SIZE = "16";
const DEFAULT_MAX_LENGTH = 30;
const defaultChangesFilterRegexDict: any = {
  [InputType.IntegerText]: /^-?(\d*)$/,
  [InputType.NonZeroLeadingDigits]: /^([1-9]{1}\d*|)$/,
  [InputType.DigitsOnly]: /^(\d*)$/,
  [InputType.DecimalText]: /^-?([0-9]*|[0-9]+\.[0-9]*)$/,
  [InputType.PositiveDecimalText]: /^([0-9]*|[0-9]+\.[0-9]*)$/
};

export interface IInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: () => any;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => any;
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
  iconSignifier?: JSX.Element;
  loading?: boolean;
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
    showTooltip: false,
    inlineElement: ""
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
                    size={ICON_SIZE}
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
        <div className={styles.inlineWrapper}>
          <div className={styles.inline}>
            <input
              disabled={this.props.disabled}
              className={`${styles.field} ${size} ${this.props.className} ${
                this.props.showError ? styles.error : ""
              }`}
              value={this.props.value}
              type={this.getRawInputType(this.props.type)}
              maxLength={this.props.maxLength}
              onChange={this.handleOnChange}
              onBlur={() => {
                if (this.props.onBlur) {
                  this.props.onBlur();
                }
              }}
              onKeyPress={event => {
                if (this.props.onKeyPress) {
                  this.props.onKeyPress(event);
                }
              }}
              placeholder={this.props.placeholder}
            />
            {this.getRightInlineElement()}
          </div>
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
      // remember cursor position
      const caretStart = event.target.selectionStart || 0;
      const caretEnd = event.target.selectionEnd || 0;

      event.target.value = this.state.previousValue;

      // set cursor back to the previous position
      if (typeof event.target.setSelectionRange === "function") {
        event.target.setSelectionRange(caretStart - 1, caretEnd - 1);
      }
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
    const targetValue = event.target.value;
    setTimeout(() => {
      this.setState({
        characterCount: targetValue.length,
        previousValue: targetValue
      });
    }, 500);
  };

  private getRightInlineElement() {
    let element: JSX.Element = <></>;
    const { showError, suffix, iconSignifier, loading } = this.props;

    if (!(showError || suffix || iconSignifier || loading)) {
      return <></>;
    }

    if (iconSignifier) {
      element = iconSignifier;
    }

    if (suffix) {
      element = <span className={styles.suffix}>{suffix}</span>;
    }

    if (loading) {
      element = (
        <Icon className={styles.loading} type="progress" size={ICON_SIZE} />
      );
    }

    if (showError) {
      element = (
        <Icon className={styles.errorIcon} size={ICON_SIZE} type="error" />
      );
    }

    return <div className={styles.rightInlineElementContainer}>{element}</div>;
  }

  private getRawInputType = (type?: InputType) => {
    if (type === InputType.Email) {
      return "email";
    } else if (type === InputType.DigitsOnly) {
      return "tel";
    } else {
      // "number" makes weird event.target.value, for example entering 123e will return an event with "" as the value,
      // causing the filter we set above to do nothing. So its preferable to use text to let our filter work instead
      return "text";
    }
  };
}
