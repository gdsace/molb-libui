import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./CustomInput";
import "./datePicker.css";

const styles = require("./g2bDatePicker.scss");

export interface IG2BDatePickerProps {
  onChange: () => any;
}

export class G2BDatePicker extends React.Component<IG2BDatePickerProps, any> {
  constructor(props: IG2BDatePickerProps) {
    super(props);
    this.state = {
      startDate: undefined
    };
    this.myRef = React.createRef();
  }

  public render() {
    return (
      <div className={styles.datePicker}>
        <DatePicker
          focus={()=>{this.myRef.current.focus()}}
          customInput={<CustomInput ref={this.myRef} />}
          selected={this.state.startDate}
          onChange={this.handleChange}
          // onBlur={this.handleOnBlur}
          dateFormat="dd/MM/yyyy"
          placeholderText={"DD/MM/YYYY"}
        />
      </div>
    );
  }

  private handleChange = (date: any) => {
    console.log("this is on Change");
    this.setState({
      startDate: date
    });
  };

  private handleOnBlur = () => {
    console.log("onblur");
  }
}
