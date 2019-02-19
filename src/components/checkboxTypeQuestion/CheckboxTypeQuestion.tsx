import * as React from "react";
import { Checkbox } from "../checkbox";
import { TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { Tooltips } from "../tooltips";

const styles = require("./checkboxTypeQuestion.scss");

export interface ICheckboxTypeQuestion {
  checked: boolean;
  disabled: boolean;
  onCheckboxClick: any;
  questionLabel: string;
  questionDescription?: string;
  tooltip?: string;
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
      questionDescription,
      tooltip
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
          <span className={styles.question}>
            {questionLabel}
            {!!tooltip && (
              <div className={styles.tooltip}>
                <Tooltips
                  trigger={
                    <Icon
                      type={"help"}
                      size={"16"}
                      className={styles.helpIcon}
                    />
                  }
                  width={250}
                  position={TooltipsLocationTheme.BottomRight}
                  specializedPosition={true}
                >
                  <div>{tooltip}</div>
                </Tooltips>
              </div>
            )}
          </span>

          <span className={styles.description}>{questionDescription}</span>
        </div>
      </div>
    );
  }
}
