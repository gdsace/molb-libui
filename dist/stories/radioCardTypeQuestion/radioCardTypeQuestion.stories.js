import React from "react";
import { storiesOf } from "@storybook/react";
import { RadioCardTypeQuestion } from "../../components/radioCardTypeQuestion/RadioCardTypeQuestion";
import { CategoryName, wInfo } from "../utils";
var radioCardTypeQuestionStyle = {
    marginBottom: "60px",
    marginLeft: "30px"
};
var question = "This is question";
var options = [
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
var selectedAnswer = "value 1";
var onChange = function (value) {
    selectedAnswer = value;
};
var errorMsg = "this is error message";
storiesOf(CategoryName.SelectionControls, module).addWithJSX("RadioCardTypeQuestion", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("div", { style: radioCardTypeQuestionStyle },
        React.createElement(RadioCardTypeQuestion, { options: options, question: question, selectedAnswer: selectedAnswer, showError: false, errorMsg: errorMsg, onChange: onChange, id: "ID1" })),
    React.createElement("div", { style: radioCardTypeQuestionStyle },
        React.createElement(RadioCardTypeQuestion, { options: options, question: question, selectedAnswer: "", showError: true, errorMsg: errorMsg, onChange: onChange, id: "ID2" })))); }));
//# sourceMappingURL=radioCardTypeQuestion.stories.js.map