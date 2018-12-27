import {
  InputType,
  Size,
  TooltipsLocationTheme
} from "@libui/components/EnumValues";
import { Tooltips } from "@src/components";
import classnames from "classnames";
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
  showCharacterCount?: boolean;
  toolTipsContent?: string;
  toolTipsPosition?: TooltipsLocationTheme;
}

export class Input extends React.Component<IInputProps, any> {
  public static defaultProps: Partial<IInputProps> = {
    className: "",
    disabled: false,
    maxLength: 30,
    minLength: 30,
    placeholder: "",
    size: Size.Medium,
    type: InputType.Text,
    showCharacterCount: false,
    showTooltip: false
  };

  constructor(props: any) {
    super(props);
    this.state = {
      characterCount: (this.props.value || "").toString().length
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
              <div className={styles.tooltipWrapper}>
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
                  width={256}
                  height={86}
                >
                  <div>{this.props.toolTipsContent}</div>
                </Tooltips>
              </div>
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
            <Icon className={styles.errorIcon} size="16" type="error" />
          ) : (
            this.props.suffix && (
              <span className={styles.suffix}>{this.props.suffix}</span>
            )
          )}
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
    const newValue = event.target.value;
    if (this.props.disabled || newValue.length > (this.props.maxLength || 30)) {
      return;
    }

    this.props.onChange(event);
    this.setState({
      characterCount: event.target.value.length
    });
  };
}
