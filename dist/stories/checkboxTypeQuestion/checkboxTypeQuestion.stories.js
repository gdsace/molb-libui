import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { CheckboxTypeQuestion } from "../../components";
import { CategoryName, wInfo } from "../utils";
var store = new Store({
    checked: false
});
var onCheckboxClick = function (value) {
    store.set({ checked: value });
};
var questionLabel = "Question label";
var questionDescription = "This is question description";
storiesOf(CategoryName.SelectionControls, module).addWithJSX("CheckboxTypeQuestion", wInfo("")(function () {
    return (React.createElement("div", null,
        React.createElement(State, { store: store },
            React.createElement(CheckboxTypeQuestion, { checked: store.checked, disabled: false, onCheckboxClick: onCheckboxClick, questionDescription: questionDescription, questionLabel: questionLabel, tooltip: "this is tool tip for different questions" })),
        React.createElement(CheckboxTypeQuestion, { checked: false, disabled: true, onCheckboxClick: onCheckboxClick, questionDescription: questionDescription, questionLabel: questionLabel }),
        React.createElement(CheckboxTypeQuestion, { checked: true, disabled: true, onCheckboxClick: onCheckboxClick, questionDescription: questionDescription, questionLabel: questionLabel }),
        React.createElement(CheckboxTypeQuestion, { checked: false, disabled: true, onCheckboxClick: onCheckboxClick, questionDescription: questionDescription, questionLabel: questionLabel, errorMsg: "This is an error message." }),
        React.createElement("div", null, "Below is a hidden checkboxTypeQuestion."),
        React.createElement(CheckboxTypeQuestion, { checked: true, disabled: true, onCheckboxClick: onCheckboxClick, questionDescription: questionDescription, questionLabel: questionLabel, hidden: true })));
}));
//# sourceMappingURL=checkboxTypeQuestion.stories.js.map