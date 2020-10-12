import React from "react";

import { storiesOf } from "@storybook/react";
import { TooltipsLocationTheme } from "../../components";
import { Icon } from "../../components/icons";
import { IOption, RadioCardTypeQuestion } from "../../components/radioCardTypeQuestion/RadioCardTypeQuestion";
import { Tooltips } from "../../components/tooltips";
import { CategoryName, wInfo } from "../utils";

const styles = require("./radioCardTypeQuestion.stories.scss");

const question = "This is question";
const options: IOption[] = [
  {
    label: "label",
    description: "description",
    value: "value 1"
  },
  {
    label: "label",
    description: "description",
    value: "value 2"
  }
];
let selectedAnswer = "value 1";
const onChange = (value: string) => {
  selectedAnswer = value;
};
const errorMsg = "this is error message";
const questionTooltip = (
  <Tooltips
    className={styles.tooltipsStyle}
    trigger={<Icon type="information" size="14" />}
    position={TooltipsLocationTheme.BottomLeft}
    specializedPosition={true}
  />
);

storiesOf(CategoryName.SelectionControls, module).add(
  "RadioCardTypeQuestion",
  wInfo(``)(() => (
    <div>
      <div className={styles.radioCardTypeQuestionStyle}>
        <RadioCardTypeQuestion
          options={options}
          question={question}
          selectedAnswer={selectedAnswer}
          showError={false}
          errorMsg={errorMsg}
          onChange={onChange}
          id={"ID1"}
          questionTooltip={questionTooltip}
        />
      </div>
      <div className={styles.radioCardTypeQuestionStyle}>
        <RadioCardTypeQuestion
          options={options}
          question={question}
          selectedAnswer={selectedAnswer}
          showError={false}
          errorMsg={errorMsg}
          onChange={onChange}
          id={"ID1"}
        />
      </div>
      <div className={styles.radioCardTypeQuestionStyle}>
        <RadioCardTypeQuestion
          options={options}
          question={question}
          selectedAnswer={""}
          showError={true}
          errorMsg={errorMsg}
          onChange={onChange}
          id={"ID2"}
        />
      </div>
    </div>
  ))
);
