import React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";

import classnames from "classnames";
import { isEmpty } from "lodash";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { Portal } from "react-overlays";
import { addLocatedErrorClassname } from "../utils";
import { CustomInput } from "./CustomInput";
import "./datePicker.css";

const styles = require("./g2bDatePicker.scss");

interface IG2BDatePickerState {
  focusedOnInput?: boolean;
}

export interface IG2BDatePickerProps extends Partial<ReactDatePickerProps> {
  // For-Approach-B: handling date as string
  selectedDate?: string;
  onDateChange?: (date: string, event?: React.SyntheticEvent<any>) => void;
  errorMsg?: string;
}

const CalendarContainer = ({ children }: { children: React.ReactNode[] }) => {
  return <Portal container={document.body}>{children}</Portal>;
};

export class G2BDatePicker extends React.Component<
  IG2BDatePickerProps,
  IG2BDatePickerState
> {
  public static defaultProps: Partial<IG2BDatePickerProps> = {
    selectedDate: undefined,
    dateFormat: "dd/MM/yyyy",
    placeholderText: "DD/MM/YYYY"
  };
  constructor(props: any) {
    super(props);
    this.state = {
      focusedOnInput: false
    };
  }

  public render() {
    const { selectedDate, popperClassName } = this.props;
    return (
      <div className={styles.datePicker}>
        <ReactDatePicker
          {...this.props}
          selected={this.convertStringToDate(selectedDate)}
          onChange={this.handleChange}
          onClickOutside={this.handleClickOutside}
          onInputClick={this.handleFocus}
          popperContainer={CalendarContainer}
          popperClassName={classnames(
            styles.popperContainerClassName,
            popperClassName
          )}
        />
        {this.props.errorMsg && (
          <p className={addLocatedErrorClassname(styles.errorMsg)}>
            {this.props.errorMsg}
          </p>
        )}
      </div>
    );
  }

  private convertStringToDate = (dateString?: string) =>
    isEmpty(dateString) ? null : new Date(dateString!);

  private convertDateToString = (date: Date | null) =>
    date ? moment(date).format("YYYY-MM-DD") : "";

  private handleChange = (
    selectedDate: Date,
    event: React.SyntheticEvent<any> | undefined
  ) => {
    this.setState({ focusedOnInput: false });
    if (this.props.onDateChange) {
      this.props.onDateChange(this.convertDateToString(selectedDate));
    }
    if (this.props.onChange) {
      this.props.onChange(selectedDate, event);
    }
  };

  private handleClickOutside = () => {
    this.setState({ focusedOnInput: false });
  };

  private handleFocus = () => {
    this.setState({ focusedOnInput: true });
  };
}
