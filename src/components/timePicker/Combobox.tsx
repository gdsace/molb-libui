import moment from "moment";
import React, { Component } from "react";
import Select from "./Select";

const formatOption = (option: any, disabledOptions: any) => {
  let value = `${option}`;
  if (option < 10) {
    value = `0${option}`;
  }
  let disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }
  return {
    value,
    disabled
  };
};

interface IComboboxProps {
  format: string;
  defaultOpenValue: moment.Moment;
  prefixCls: string;
  value?: moment.Moment;
  onChange: (...args: any[]) => any;
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
  hourOptions: any[];
  minuteOptions: any[];
  secondOptions: any[];
  disabledHours?: (...args: any[]) => any;
  disabledMinutes?: (...args: any[]) => any;
  disabledSeconds?: (...args: any[]) => any;
  onCurrentSelectPanelChange?: (...args: any[]) => any;
  use12Hours?: boolean;
  isAM?: boolean;
}

export class Combobox extends Component<IComboboxProps, {}> {
  public onItemChange = (type: any, itemValue: any) => {
    const { onChange, defaultOpenValue, use12Hours } = this.props;
    const value = (this.props.value || defaultOpenValue).clone();
    if (type === "hour") {
      if (use12Hours) {
        if (this.props.isAM) {
          value.hour(+itemValue % 12);
        } else {
          value.hour((+itemValue % 12) + 12);
        }
      } else {
        value.hour(+itemValue);
      }
    } else if (type === "minute") {
      value.minute(+itemValue);
    } else if (type === "ampm") {
      const ampm = itemValue.toUpperCase();
      if (use12Hours) {
        if (ampm === "PM" && value.hour() < 12) {
          value.hour((value.hour() % 12) + 12);
        }
        if (ampm === "AM") {
          if (value.hour() >= 12) {
            value.hour(value.hour() - 12);
          }
        }
      }
    } else {
      value.second(+itemValue);
    }
    onChange(value);
  };

  public onEnterSelectPanel = (range: any) => {
    if (this.props.onCurrentSelectPanelChange) {
      this.props.onCurrentSelectPanelChange(range);
    }
  };

  public getHourSelect(hour: any) {
    const {
      prefixCls,
      hourOptions,
      disabledHours,
      showHour,
      use12Hours
    } = this.props;
    if (!showHour) {
      return null;
    }
    const disabledOptions = disabledHours && disabledHours();
    let hourOptionsAdj;
    let hourAdj;
    if (use12Hours) {
      hourOptionsAdj = [12].concat(hourOptions.filter(h => h < 12 && h > 0));
      hourAdj = hour % 12 || 12;
    } else {
      hourOptionsAdj = hourOptions;
      hourAdj = hour;
    }
    return (
      <Select
        prefixCls={prefixCls}
        options={hourOptionsAdj.map(option =>
          formatOption(option, disabledOptions)
        )}
        selectedIndex={hourOptionsAdj.indexOf(hourAdj)}
        type="hour"
        onSelect={this.onItemChange}
        onMouseEnter={this.onEnterSelectPanel.bind(this, "hour")}
      />
    );
  }

  public getMinuteSelect(minute: any) {
    const {
      prefixCls,
      minuteOptions,
      disabledMinutes,
      defaultOpenValue,
      showMinute
    } = this.props;
    if (!showMinute) {
      return null;
    }
    const value = this.props.value || defaultOpenValue;
    const disabledOptions = disabledMinutes && disabledMinutes(value.hour());
    return (
      <Select
        prefixCls={prefixCls}
        options={minuteOptions.map(option =>
          formatOption(option, disabledOptions)
        )}
        selectedIndex={minuteOptions.indexOf(minute)}
        type="minute"
        onSelect={this.onItemChange}
        onMouseEnter={this.onEnterSelectPanel.bind(this, "minute")}
      />
    );
  }

  public getSecondSelect(second: any) {
    const {
      prefixCls,
      secondOptions,
      disabledSeconds,
      showSecond,
      defaultOpenValue
    } = this.props;
    if (!showSecond) {
      return null;
    }
    const value = this.props.value || defaultOpenValue;
    const disabledOptions =
      disabledSeconds && disabledSeconds(value.hour(), value.minute());
    return (
      <Select
        prefixCls={prefixCls}
        options={secondOptions.map(option =>
          formatOption(option, disabledOptions)
        )}
        selectedIndex={secondOptions.indexOf(second)}
        type="second"
        onSelect={this.onItemChange}
        onMouseEnter={this.onEnterSelectPanel.bind(this, "second")}
      />
    );
  }

  public getAMPMSelect() {
    const { prefixCls, use12Hours, format } = this.props;
    if (!use12Hours) {
      return null;
    }
    const AMPMOptions = ["am", "pm"] // If format has A char, then we should uppercase AM/PM
      .map(c => (format.match(/\sA/) ? c.toUpperCase() : c))
      .map(c => ({ value: c }));
    const selected = this.props.isAM ? 0 : 1;
    return (
      <Select
        prefixCls={prefixCls}
        options={AMPMOptions}
        selectedIndex={selected}
        type="ampm"
        onSelect={this.onItemChange}
        onMouseEnter={this.onEnterSelectPanel.bind(this, "ampm")}
      />
    );
  }

  public render() {
    const { prefixCls, defaultOpenValue } = this.props;
    const value = this.props.value || defaultOpenValue;
    return (
      <div className={`${prefixCls}-combobox`}>
        {this.getHourSelect(value.hour())}
        {this.getMinuteSelect(value.minute())}
        {this.getSecondSelect(value.second())}
        {this.getAMPMSelect()}
      </div>
    );
  }
}
export default Combobox;
