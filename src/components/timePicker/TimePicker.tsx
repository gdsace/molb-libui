import { TimePicker as AntdTimePicker } from "antd";
import { TimePickerProps as AntdTimePickerProps } from "antd/lib/time-picker";
import classNames from "classnames";
import _ from "lodash";
import moment from "moment";
import * as React from "react";

import "antd/dist/antd.css";
import "./antd-time-picker-override.css";

const styles = require("./timePicker.scss");

export interface ITimePickerPros extends AntdTimePickerProps {
  title?: string;
  errorMsg?: string;
  showError?: boolean;
  theme?: string;
}

export class TimePicker extends React.Component<ITimePickerPros, any> {
  public static defaultProps: Partial<ITimePickerPros> = {
    title: "",
    errorMsg: "",
    showError: false
  };

  constructor(props: any) {
    super(props);
    this.handleTimePickerChange = this.handleTimePickerChange.bind(this);
    this.state = {
      currentTime: (this.props.value || "").toString().length
    };
  }

  public render() {
    const hasError = this.props.showError;
    const rootContainerClassName = classNames(styles.rootContainer, {
      "ant-time-picker-error": hasError
    });
    const props = this.props;
    const otherProps = _.omit(props, ["title", "errorMsg", "showError"]);
    return (
      <div className={rootContainerClassName} data-scrollpoint={true}>
        <div className={styles.headerSection}>
          <label className={styles.title}>{this.props.title}</label>
        </div>
        <div className={styles.content}>
          <AntdTimePicker
            {...otherProps}
            use12Hours
            format="h:mm A"
            minuteStep={15}
            className={styles.antdTimePicker}
            popupClassName={styles.antdTimePickerPopup}
            placeholder={this.props.placeholder}
            onChange={this.handleTimePickerChange}
            disabled={!!this.props.disabled}
          />
        </div>
        {hasError && (
          <div className={styles.footerSection}>
            <div className={styles.footerMessage}>{this.props.errorMsg}</div>
          </div>
        )}
      </div>
    );
  }

  private handleTimePickerChange(time: moment.Moment, timeString: string) {
    if (this.props.onChange) {
      this.props.onChange(time, timeString);
    }
    this.setState({
      currentTime: time
    });
  }
}
