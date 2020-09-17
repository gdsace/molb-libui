import classnames from "classnames";
import * as _ from "lodash";
import React from "react";
import { Icon } from "../icons";

const styles = require("./g2bDatePicker.scss");

export class CustomInput extends React.Component<any, any> {
  public render() {
    const customInputClassName = this.props.selected
      ? classnames(styles.customInput, styles.selected)
      : classnames(styles.customInput);

    const errorClassName = this.props.showError ? classnames(styles.errorInput) : "";

    const textColorClassName = this.props.value ? "" : classnames(styles.placeholderColor);

    return (
      <div
        className={classnames(customInputClassName, errorClassName, textColorClassName)}
        onClick={this.props.onClick}
      >
        {!_.isEmpty(this.props.value) ? this.props.value : this.props.placeholder}
        <Icon className={styles.calendarIcon} size="16" type="calendar" />
      </div>
    );
  }
}
