import React from "react";
import DatePicker from "react-datepicker";

import { isEmpty } from "lodash";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { Portal } from "react-overlays";
import { addLocatedErrorClassname } from "../utils";
import { CustomInput } from "./CustomInput";
import "./datePicker.css";

const styles = require("./g2bDatePicker.scss");

interface IG2BDatePickerState {
  selected?: boolean;
}

export interface IG2BDatePickerProps {
  selectedDate?: string;
  onChange: (date: string, event?: React.SyntheticEvent<any>) => void;
  placeholderText?: string;
  dateFormat?: string;
  errorMsg?: string;
  customInput?: React.ReactNode;
}

const CalendarContainer = ({ children }: { children: React.ReactNode[] }) => {
  return <Portal container={document.body}>{children}</Portal>;
};

export class G2BDatePicker extends React.Component<
  IG2BDatePickerProps,
  IG2BDatePickerState
> {
  public static defaultProps: Partial<IG2BDatePickerProps> = {
    selectedDate: undefined
  };
  constructor(props: any) {
    super(props);
    this.state = {
      selected: false
    };
  }

  public render() {
    const selected = this.convertStringToDate(this.props.selectedDate);
    return (
      <div className={styles.datePicker}>
        <DatePicker
          customInput={
            this.props.customInput || (
              <CustomInput
                showError={!!this.props.errorMsg}
                selected={this.state.selected}
              />
            )
          }
          selected={selected}
          onChange={this.handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText={"DD/MM/YYYY"}
          onClickOutside={this.handleClickOutside}
          onInputClick={this.handleFocus}
          popperContainer={CalendarContainer}
          popperClassName={styles.popperContainerClassName}
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

  private handleChange = (selectedDate: Date) => {
    this.setState({ selected: false });
    this.props.onChange(this.convertDateToString(selectedDate));
  };

  private handleClickOutside = () => {
    this.setState({ selected: false });
  };

  private handleFocus = () => {
    this.setState({ selected: true });
  };
}
