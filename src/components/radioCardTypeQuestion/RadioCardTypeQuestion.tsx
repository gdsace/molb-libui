import * as React from "react";

import { H7 } from "../h7";
import { TileGroup } from "../tileGroup";
import { Tile } from "../tileGroup/tile";

import { map } from "lodash";
import { TileTheme } from "../EnumValues";

const styles = require("./radioCardTypeQuestion.scss");

export interface IRadioCardTypeQuestionProps {
  question: string;
  options: IOption[];
  onChange: (value: string) => any;
  selectedAnswer: string;
  showError?: boolean;
  errorMsg?: string;
  id?: string;
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
    const { question, options, selectedAnswer } = this.props;
    return (
      <div id={this.props.id} className={styles.questionWrapper}>
        <H7>{question}</H7>
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
        {this.props.showError && (
          <div className={styles.errorMsg}>{this.props.errorMsg}</div>
        )}
      </div>
    );
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };
}
