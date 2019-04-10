import classnames from "classnames";
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
    const customInputClassName = this.props.selected
      ? classnames(styles.customInput, styles.selected)
      : classnames(styles.customInput);

    const errorClassName = this.props.showError
      ? classnames(styles.errorInput)
      : "";

    return (
      <div
        tabIndex={1}
        className={classnames(customInputClassName, errorClassName)}
        onClick={this.handleOnClick}
      >
        {!_.isEmpty(this.props.value)
          ? this.props.value
          : this.props.placeholder}
        <Icon className={styles.calendarIcon} size="16" type="calendar" />
      </div>
    );
  }

  private handleOnClick = () => {
    this.props.onClick();
  };
}
