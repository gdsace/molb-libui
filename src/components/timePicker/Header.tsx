import moment from "moment";
import React, { Component, RefObject } from "react";

interface IHeaderProps {
  format: string;
  prefixCls: string;
  disabledDate?: (...args: any[]) => any;
  placeholder?: string;
  clearText?: string;
  value: moment.Moment;
  inputReadOnly?: boolean;
  hourOptions: any[];
  minuteOptions: any[];
  secondOptions: any[];
  disabledHours?: (...args: any[]) => any;
  disabledMinutes?: (...args: any[]) => any;
  disabledSeconds?: (...args: any[]) => any;
  onChange?: (...args: any[]) => any;
  onClear?: (...args: any[]) => any;
  onEsc?: (...args: any[]) => any;
  allowEmpty?: boolean;
  defaultOpenValue?: moment.Moment;
  currentSelectPanel?: string;
  focusOnOpen?: boolean;
  onKeyDown?: (...args: any[]) => any;
  clearIcon?: React.ReactNode;
}

interface IHeaderState {
  str: any;
  invalid: boolean;
}

export class Header extends Component<IHeaderProps, IHeaderState> {
  public static defaultProps = {
    inputReadOnly: false
  };

  private readonly inputRef: RefObject<HTMLInputElement>;

  constructor(props: IHeaderProps) {
    super(props);
    this.inputRef = React.createRef();
    const { value, format } = props;
    this.state = {
      str: (value && value.format(format)) || "",
      invalid: false
    };
  }
  public componentDidMount() {
    if (this.props.focusOnOpen) {
      // Wait one frame for the panel to be positioned before focusing
      const requestAnimationFrame =
        window.requestAnimationFrame || window.setTimeout;
      requestAnimationFrame(() => {
        if (this.inputRef.current) {
          this.inputRef.current.focus();
          this.inputRef.current.select();
        }
      });
    }
  }
  public componentWillReceiveProps(nextProps: IHeaderProps) {
    const { value, format } = nextProps;
    this.setState({
      str: (value && value.format(format)) || "",
      invalid: false
    });
  }
  public onInputChange = (event: any) => {
    const str = event.target.value;
    this.setState({
      str
    });
    const {
      format,
      hourOptions,
      minuteOptions,
      secondOptions,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      onChange,
      allowEmpty
    } = this.props;
    if (str) {
      const originalValue = this.props.value;
      const value = this.getProtoValue().clone();
      const parsed = moment(str, format, true);
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
        return;
      }
      value
        .hour(parsed.hour())
        .minute(parsed.minute())
        .second(parsed.second());
      // if time value not allowed, response warning.
      if (
        hourOptions.indexOf(value.hour()) < 0 ||
        minuteOptions.indexOf(value.minute()) < 0 ||
        secondOptions.indexOf(value.second()) < 0
      ) {
        this.setState({
          invalid: true
        });
        return;
      }
      // if time value is disabled, response warning.
      const disabledHourOptions = disabledHours && disabledHours();
      const disabledMinuteOptions =
        disabledMinutes && disabledMinutes(value.hour());
      const disabledSecondOptions =
        disabledSeconds && disabledSeconds(value.hour(), value.minute());
      if (
        (disabledHourOptions &&
          disabledHourOptions.indexOf(value.hour()) >= 0) ||
        (disabledMinuteOptions &&
          disabledMinuteOptions.indexOf(value.minute()) >= 0) ||
        (disabledSecondOptions &&
          disabledSecondOptions.indexOf(value.second()) >= 0)
      ) {
        this.setState({
          invalid: true
        });
        return;
      }
      if (originalValue) {
        if (
          originalValue.hour() !== value.hour() ||
          originalValue.minute() !== value.minute() ||
          originalValue.second() !== value.second()
        ) {
          // keep other fields for rc-calendar
          const changedValue = originalValue.clone();
          changedValue.hour(value.hour());
          changedValue.minute(value.minute());
          changedValue.second(value.second());
          if (onChange) {
            onChange(changedValue);
          }
        }
      } else if (originalValue !== value) {
        if (onChange) {
          onChange(value);
        }
      }
    } else if (allowEmpty) {
      if (onChange) {
        onChange(null);
      }
    } else {
      this.setState({
        invalid: true
      });
      return;
    }
    this.setState({
      invalid: false
    });
  };
  public onKeyDown = (e: any) => {
    const { onEsc, onKeyDown } = this.props;
    if (e.keyCode === 27) {
      if (onEsc) {
        onEsc();
      }
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };
  public onClear = () => {
    this.setState({ str: "" });
    if (this.props.onClear) {
      this.props.onClear();
    }
  };
  public getClearButton() {
    const { prefixCls, allowEmpty, clearIcon } = this.props;
    if (!allowEmpty) {
      return null;
    }
    return (
      <a
        role="button"
        className={`${prefixCls}-clear-btn`}
        title={this.props.clearText}
        onMouseDown={this.onClear}
      >
        {clearIcon || <i className={`${prefixCls}-clear-btn-icon`} />}
      </a>
    );
  }
  public getProtoValue() {
    return this.props.value || this.props.defaultOpenValue;
  }
  public getInput() {
    const { prefixCls, placeholder, inputReadOnly } = this.props;
    const { invalid, str } = this.state;
    const invalidClass = invalid ? `${prefixCls}-input-invalid` : "";
    return (
      <input
        className={`${prefixCls}-input  ${invalidClass}`}
        ref={this.inputRef}
        onKeyDown={this.onKeyDown}
        value={str}
        placeholder={placeholder}
        onChange={this.onInputChange}
        readOnly={inputReadOnly}
      />
    );
  }
  public render() {
    const { prefixCls } = this.props;
    return (
      <div className={`${prefixCls}-input-wrap`}>
        {this.getInput()}
        {this.getClearButton()}
      </div>
    );
  }
}
export default Header;
