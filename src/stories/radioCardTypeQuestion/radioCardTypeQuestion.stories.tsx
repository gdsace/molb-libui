import React from "react";

import {
  IOption,
  RadioCardTypeQuestion
} from "../../components/radioCardTypeQuestion/RadioCardTypeQuestion";
import { wInfo } from "../utils";
import { storiesOf } from "@storybook/react";

const radioCardTypeQuestionStyle = {
  marginBottom: "60px",
  marginLeft: "30px"
};

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

(storiesOf("Components", module) as any).addWithJSX(
  "RadioCardTypeQuestion",
  wInfo(``)(() => (
    <div>
      <div style={radioCardTypeQuestionStyle}>
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
      <div style={radioCardTypeQuestionStyle}>
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
