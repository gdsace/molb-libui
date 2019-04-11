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
  hidden?: boolean;
}

interface ICheckboxTypeQuestionState {
  checked: boolean;
}

export class CheckboxTypeQuestion extends React.Component<
  ICheckboxTypeQuestion,
  ICheckboxTypeQuestionState
> {
  constructor(props: ICheckboxTypeQuestion) {
    super(props);
    this.state = { checked: props.checked };
  }

  public render() {
    const {
      checked,
      disabled,
      questionLabel,
      questionDescription,
      tooltip,
      hidden
    } = this.props;
    if (hidden) {
      return <></>;
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            disabled={disabled}
            checked={checked}
            onCheckboxClick={this.onCheckedValueChange}
          />
        </div>

        <div
          className={`${styles.textWrapper} ${disabled ? styles.disabled : ""}`}
        >
          <span className={styles.question}>
            <div className={styles.label} onClick={this.onTextClick}>
              {questionLabel}
            </div>
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

          <span className={styles.description} onClick={this.onTextClick}>
            {questionDescription}
          </span>
        </div>
      </div>
    );
  }

  private onTextClick = () => {
    if (this.props.disabled) {
      return;
    }
    this.onCheckedValueChange(!this.state.checked);
  };

  private onCheckedValueChange = (newValue: boolean) => {
    this.setState({ checked: newValue });
    if (this.props.onCheckboxClick) {
      this.props.onCheckboxClick(newValue);
    }
  };
}
