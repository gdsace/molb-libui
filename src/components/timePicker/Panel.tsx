import classNames from "classnames";
import moment from "moment";
import React, { Component } from "react";
import Combobox from "./Combobox";
import Header from "./Header";

function noop() {
  return;
}

function generateOptions(
  length: any,
  disabledOptions: any,
  hideDisabledOptions: any,
  step = 1
) {
  const arr = [];
  for (let value = 0; value < length; value += step) {
    if (
      !disabledOptions ||
      disabledOptions.indexOf(value) < 0 ||
      !hideDisabledOptions
    ) {
      arr.push(value);
    }
  }
  return arr;
}

interface IPanelProps {
  clearText?: string;
  prefixCls: string;
  className?: string;
  defaultOpenValue?: moment.Moment;
  value: moment.Moment;
  placeholder?: string;
  format: string;
  inputReadOnly?: boolean;
  disabledHours: (...args: any[]) => any;
  disabledMinutes: (...args: any[]) => any;
  disabledSeconds: (...args: any[]) => any;
  hideDisabledOptions: boolean;
  onChange?: (...args: any[]) => any;
  onEsc?: (...args: any[]) => any;
  allowEmpty?: boolean;
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
  onClear?: (...args: any[]) => any;
  use12Hours?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  addon?: (...args: any[]) => any;
  focusOnOpen?: boolean;
  onKeyDown?: (...args: any[]) => any;
  clearIcon?: React.ReactNode;
  showHeader?: boolean;
}

interface IPanelState {
  value: moment.Moment;
  currentSelectPanel: string;
  selectionRange: undefined[];
}

export class Panel extends Component<IPanelProps, IPanelState> {
  public static defaultProps = {
    prefixCls: "rc-time-picker-panel",
    onChange: noop,
    onClear: noop,
    disabledHours: noop,
    disabledMinutes: noop,
    disabledSeconds: noop,
    defaultOpenValue: moment(),
    use12Hours: false,
    addon: noop,
    onKeyDown: noop,
    inputReadOnly: false,
    showHeader: true
  };
  constructor(props: IPanelProps) {
    super(props);
    this.state = {
      value: props.value,
      currentSelectPanel: "",
      selectionRange: []
    };
  }
  public componentWillReceiveProps(nextProps: IPanelProps) {
    const value = nextProps.value;
    if (value) {
      this.setState({
        value
      });
    }
  }
  public onChange = (newValue: any) => {
    this.setState({ value: newValue });
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  };
  public onCurrentSelectPanelChange = (currentSelectPanel: string) => {
    this.setState({ currentSelectPanel });
  };
  // https://github.com/ant-design/ant-design/issues/5829
  public close() {
    if (this.props.onEsc) {
      this.props.onEsc();
    }
  }

  public disabledHours = () => {
    const { use12Hours, disabledHours } = this.props;
    if (!disabledHours) {
      return;
    }

    let disabledOptions = disabledHours();
    if (use12Hours && Array.isArray(disabledOptions)) {
      if (this.isAM()) {
        disabledOptions = disabledOptions
          .filter(h => h < 12)
          .map(h => (h === 0 ? 12 : h));
      } else {
        disabledOptions = disabledOptions.map(h => (h === 12 ? 12 : h - 12));
      }
    }
    return disabledOptions;
  };
  public isAM() {
    const value = this.state.value || this.props.defaultOpenValue;
    return value.hour() >= 0 && value.hour() < 12;
  }
  public render() {
    const {
      prefixCls,
      className,
      placeholder,
      disabledMinutes,
      disabledSeconds,
      hideDisabledOptions,
      allowEmpty,
      showHour,
      showMinute,
      showSecond,
      format,
      defaultOpenValue,
      clearText,
      onEsc,
      addon,
      use12Hours,
      onClear,
      focusOnOpen,
      onKeyDown,
      hourStep,
      minuteStep,
      secondStep,
      inputReadOnly,
      clearIcon,
      showHeader
    } = this.props;
    const { value, currentSelectPanel } = this.state;
    const disabledHourOptions = this.disabledHours();
    const disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
    const disabledSecondOptions = disabledSeconds(
      value ? value.hour() : null,
      value ? value.minute() : null
    );
    const hourOptions = generateOptions(
      24,
      disabledHourOptions,
      hideDisabledOptions,
      hourStep
    );
    const minuteOptions = generateOptions(
      60,
      disabledMinuteOptions,
      hideDisabledOptions,
      minuteStep
    );
    const secondOptions = generateOptions(
      60,
      disabledSecondOptions,
      hideDisabledOptions,
      secondStep
    );
    return (
      <div
        className={classNames({
          [`${prefixCls}-inner`]: true,
          [`${className}`]: !!className
        })}
      >
        {showHeader && (
          <Header
            clearText={clearText}
            prefixCls={prefixCls}
            defaultOpenValue={defaultOpenValue}
            value={value}
            currentSelectPanel={currentSelectPanel}
            onEsc={onEsc}
            format={format}
            placeholder={placeholder}
            hourOptions={hourOptions}
            minuteOptions={minuteOptions}
            secondOptions={secondOptions}
            disabledHours={this.disabledHours}
            disabledMinutes={disabledMinutes}
            disabledSeconds={disabledSeconds}
            onChange={this.onChange}
            onClear={onClear}
            allowEmpty={allowEmpty}
            focusOnOpen={focusOnOpen}
            onKeyDown={onKeyDown}
            inputReadOnly={inputReadOnly}
            clearIcon={clearIcon}
          />
        )}
        <Combobox
          prefixCls={prefixCls}
          value={value}
          defaultOpenValue={defaultOpenValue}
          format={format}
          onChange={this.onChange}
          showHour={showHour}
          showMinute={showMinute}
          showSecond={showSecond}
          hourOptions={hourOptions}
          minuteOptions={minuteOptions}
          secondOptions={secondOptions}
          disabledHours={this.disabledHours}
          disabledMinutes={disabledMinutes}
          disabledSeconds={disabledSeconds}
          onCurrentSelectPanelChange={this.onCurrentSelectPanelChange}
          use12Hours={use12Hours}
          isAM={this.isAM()}
        />
        {addon && addon(this)}
      </div>
    );
  }
}
export default Panel;
