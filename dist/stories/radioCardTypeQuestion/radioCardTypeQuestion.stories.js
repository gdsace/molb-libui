import React from "react";
import { storiesOf } from "@storybook/react";
import { TooltipsLocationTheme } from "../../components";
import { Icon } from "../../components/icons";
import { RadioCardTypeQuestion } from "../../components/radioCardTypeQuestion/RadioCardTypeQuestion";
import { Tooltips } from "../../components/tooltips";
import { CategoryName, wInfo } from "../utils";
var styles = require("./radioCardTypeQuestion.stories.scss");
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
var questionTooltip = (React.createElement(Tooltips, { className: styles.tooltipsStyle, trigger: React.createElement(Icon, { type: "information", size: "14" }), position: TooltipsLocationTheme.BottomLeft, specializedPosition: true }));
storiesOf(CategoryName.SelectionControls, module).addWithJSX("RadioCardTypeQuestion", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("div", { className: styles.radioCardTypeQuestionStyle },
        React.createElement(RadioCardTypeQuestion, { options: options, question: question, selectedAnswer: selectedAnswer, showError: false, errorMsg: errorMsg, onChange: onChange, id: "ID1", questionTooltip: questionTooltip })),
    React.createElement("div", { className: styles.radioCardTypeQuestionStyle },
        React.createElement(RadioCardTypeQuestion, { options: options, question: question, selectedAnswer: selectedAnswer, showError: false, errorMsg: errorMsg, onChange: onChange, id: "ID1" })),
    React.createElement("div", { className: styles.radioCardTypeQuestionStyle },
        React.createElement(RadioCardTypeQuestion, { options: options, question: question, selectedAnswer: "", showError: true, errorMsg: errorMsg, onChange: onChange, id: "ID2" })))); }));
//# sourceMappingURL=radioCardTypeQuestion.stories.js.map