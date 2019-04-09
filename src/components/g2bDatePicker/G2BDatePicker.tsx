import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./CustomInput";
import "./datePicker.css";

const styles = require("./g2bDatePicker.scss");

export interface IG2BDatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null, event?: React.SyntheticEvent<any>) => void;
  placeholderText?: string;
  dateFormat?: string;
  showError?: boolean;
  errorMsg?: string;
  customInput?: React.ReactNode;
}

export class G2BDatePicker extends React.Component<IG2BDatePickerProps, any> {
  public static defaultProps: Partial<IG2BDatePickerProps> = {
    selectedDate: null
  };

  public render() {
    return (
      <div className={styles.datePicker}>
        <DatePicker
          customInput={
            this.props.customInput || (
              <CustomInput showError={this.props.showError} />
            )
          }
          selected={this.props.selectedDate}
          onChange={this.handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText={"DD/MM/YYYY"}
        />
        {this.props.showError && (
          <p className={styles.errorMsg}>{this.props.errorMsg}</p>
        )}
      </div>
    );
  }

  private handleChange = (selectedDate: Date) => {
    this.props.onChange(selectedDate);
  };
}
