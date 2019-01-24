import * as React from "react";

import { H7 } from "../h7";
import { TileGroup } from "../tileGroup";
import { Tile } from "../tileGroup/tile";

import classNames from "classnames";
import { map } from "lodash";
import { NotificationTheme, TileTheme } from "../EnumValues";
import { InlineNotification } from "../inlineNotification";

const styles = require("./radioCardTypeQuestion.scss");

export interface IRadioCardTypeQuestionProps {
  question: string;
  options: IOption[];
  onChange: (value: string) => any;
  selectedAnswer: string;
  showError?: boolean;
  errorMsg?: string;
  id?: string;
  radioCardTypeQuestionClassname: string;
}

export interface IOption {
  label: string;
  description: string;
  value: string;
}

export class RadioCardTypeQuestion extends React.Component<
  IRadioCardTypeQuestionProps,
  {}
> {
  public static defaultProps: Partial<IRadioCardTypeQuestionProps> = {
    showError: false
  };

  public render() {
    const {
      question,
      options,
      selectedAnswer,
      radioCardTypeQuestionClassname
    } = this.props;
    const questionWrapperClassname = classNames(styles.questionWrapper, {
      [`${radioCardTypeQuestionClassname}`]: radioCardTypeQuestionClassname
    });
    return (
      <div id={this.props.id} className={questionWrapperClassname}>
        <H7>{question}</H7>
        {this.props.showError && this.props.errorMsg && (
          <div className={styles.errorMsg}>
            <InlineNotification
              text={this.props.errorMsg}
              theme={NotificationTheme.Error}
            />
          </div>
        )}
        <TileGroup
          onChange={this.onChange}
          className={styles.tileGroupWrapper}
          value={selectedAnswer}
        >
          {map(options, option => (
            <Tile
              key={option.value}
              theme={TileTheme.MediumTile}
              icon={""}
              content={option.label}
              description={option.description}
              value={option.value}
              containerStyle={styles.tileWrapper}
            />
          ))}
        </TileGroup>
      </div>
    );
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };
}
