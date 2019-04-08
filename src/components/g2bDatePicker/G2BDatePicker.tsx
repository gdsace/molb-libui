import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./CustomInput";
import "./datePicker.css";

const styles = require("./g2bDatePicker.scss");

export interface IG2BDatePickerProps {
  onChange: (date: any) => any;
}

export class G2BDatePicker extends React.Component<IG2BDatePickerProps, any> {
  constructor(props: IG2BDatePickerProps) {
    super(props);
    this.state = {
      startDate: undefined
    };
  }

  public render() {
    return (
      <div className={styles.datePicker}>
        <DatePicker
          customInput={<CustomInput />}
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText={"DD/MM/YYYY"}
        />
      </div>
    );
  }

  private handleChange = (date: any) => {
    this.setState({
      startDate: date
    });
    this.props.onChange(date);
  };
}
