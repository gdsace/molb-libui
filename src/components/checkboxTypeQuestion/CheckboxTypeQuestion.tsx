import * as React from "react";
import { Checkbox } from "../checkbox";

const styles = require("./checkboxTypeQuestion.scss");

export interface ICheckboxTypeQuestion {
  checked: boolean;
  disabled: boolean;
  onCheckboxClick: any;
  questionLabel: string;
  questionDescription?: string;
}

export class CheckboxTypeQuestion extends React.Component<
  ICheckboxTypeQuestion,
  {}
> {
  public render() {
    const {
      checked,
      disabled,
      onCheckboxClick,
      questionLabel,
      questionDescription
    } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            disabled={disabled}
            checked={checked}
            onCheckboxClick={onCheckboxClick}
          />
        </div>

        <div
          className={`${styles.textWrapper} ${disabled ? styles.disabled : ""}`}
        >
          <span className={styles.question}>{questionLabel}</span>
          <span className={styles.description}>{questionDescription}</span>
        </div>
      </div>
    );
  }
}
