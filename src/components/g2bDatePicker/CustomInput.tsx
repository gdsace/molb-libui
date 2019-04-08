import classNames from "classnames";
import * as _ from "lodash";
import React from "react";
import { Icon } from "../icons";

const styles = require("./g2bDatePicker.scss");

interface ICustomInputState {
  customInputSelected: boolean;
}

export class CustomInput extends React.Component<any, ICustomInputState> {
  constructor(props: any) {
    super(props);
    this.state = {
      customInputSelected: false
    };
  }

  public render() {
    const customInputClassName = this.state.customInputSelected
      ? classNames(styles.customInput, styles.customInputSelected)
      : classNames(styles.customInput);
    return (
      <div
        tabIndex={1}
        className={customInputClassName}
        onClick={this.handleOnClick}
        onBlur={this.handleOnBlur}
      >
        {!_.isEmpty(this.props.value)
          ? this.props.value
          : this.props.placeholder}
        <Icon className={styles.calendarIcon} size="16" type="calendar" />
      </div>
    );
  }

  private handleOnClick = () => {
    this.setState({
      customInputSelected: true
    });
    this.props.onClick();
  };

  private handleOnBlur = () => {
    this.setState({ customInputSelected: false });
    this.props.onBlur();
  };
}
