import { boolean, object, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { noop } from "lodash";
import React from "react";
import { Radio } from "../../components/radio";
import { CategoryName } from "../utils";
var styles = require("./radio.scss");
var valueChangeHandler = noop;
var optionValueArray = [
    {
        value: "value1",
        label: "yes"
    },
    {
        value: "value2",
        label: "no"
    }
];
var optionValueArray3 = [
    {
        value: "value1",
        label: "value1 label"
    },
    {
        value: "value2",
        label: "value2 label"
    },
    {
        value: "value3",
        label: "disabled label",
        disabled: true
    }
];
var optionValueArray4 = [
    {
        value: "value1",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum, tellus ut dapibus scelerisque, leo purus consectetur eros, eget tincidunt ipsum turpis et quam. Cras cursus sit amet ante ut pellentesque. Nam lobortis porttitor nisi et vestibulum. Curabitur ac ligula sit amet lorem iaculis porttitor eu sed nunc. Etiam id eleifend ligula, a vehicula mauris. Suspendisse at eros gravida metus sagittis luctus. Maecenas pellentesque, magna sit amet rhoncus rhoncus, est lacus interdum risus, sed auctor lacus felis vel libero."
    },
    {
        value: "value2",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum, tellus ut dapibus scelerisque, leo purus consectetur eros, eget tincidunt ipsum turpis et quam. Cras cursus sit amet ante ut pellentesque. Nam lobortis porttitor nisi et vestibulum. Curabitur ac ligula sit amet lorem iaculis porttitor eu sed nunc. Etiam id eleifend ligula, a vehicula mauris. Suspendisse at eros gravida metus sagittis luctus. Maecenas pellentesque, magna sit amet rhoncus rhoncus, est lacus interdum risus, sed auctor lacus felis vel libero."
    }
];
/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
storiesOf(CategoryName.SelectionControls, module)
    .addWithJSX("Radio showing errors", function () { return (React.createElement(Radio, { text: text("text", "1. all enable radio buttons"), optionList: optionValueArray.map(function (opt, index) {
        return object("optionItem[" + index + "]", opt);
    }), onChange: valueChangeHandler, disabled: boolean("disabled", false), showError: boolean("showError", true), errorMsg: text("errorMsg", "This field is required."), radioLabelLineBreak: boolean("radioLabelLineBreak", false), showTooltip: boolean("showTooltip", false) })); })
    .addWithJSX("Radio Disabled", function () { return (React.createElement(Radio, { text: text("text", "2. all disabled radio buttons"), optionList: optionValueArray.map(function (opt, index) {
        return object("optionItem[" + index + "]", opt);
    }), onChange: valueChangeHandler, disabled: boolean("disabled", true), value: text("value", "value1"), radioTextStyleOverride: styles.overrideRadioText, labelStyleOverride: styles.overrideRadioLabel, radioLabelLineBreak: boolean("radioLabelLineBreak", false) })); })
    .addWithJSX("Radio with enabled and disabled", function () { return (React.createElement(Radio, { text: "3. mixed disabled and enabled radio buttons", optionList: optionValueArray3.map(function (opt, index) {
        return object("optionItem[" + index + "]", opt);
    }), onChange: valueChangeHandler, disabled: boolean("disabled", false), value: text("value", "value1"), radioLabelLineBreak: boolean("radioLabelLineBreak", false) })); })
    .addWithJSX("Radio with line break", function () { return (React.createElement(Radio, { text: "4. ensure line break for each radio button", optionList: optionValueArray4.map(function (opt, index) {
        return object("optionItem[" + index + "]", opt);
    }), onChange: valueChangeHandler, disabled: boolean("disabled", false), showError: boolean("showError", true), radioLabelLineBreak: boolean("radioLabelLineBreak", true) })); })
    .addWithJSX("Radio with tooltip", function () { return (React.createElement(Radio, { text: text("text", "5. radio button with tooltip"), optionList: optionValueArray.map(function (opt, index) {
        return object("optionItem[" + index + "]", opt);
    }), onChange: valueChangeHandler, disabled: boolean("disabled", false), showError: boolean("showError", false), errorMsg: "This field is required.", radioLabelLineBreak: boolean("radioLabelLineBreak", false), showTooltip: boolean("showTooltip", true), toolTipsContent: text("toolTipsContent", "This is the content you want to show on tooltip") })); })
    .addWithJSX("Radio with prompt message", function () { return (React.createElement(Radio, { text: text("text", "6. radio button with label and prompt message"), optionList: optionValueArray.map(function (opt, index) {
        return object("optionItem[" + index + "]", opt);
    }), onChange: valueChangeHandler, disabled: boolean("disabled", false), radioLabelLineBreak: boolean("radioLabelLineBreak", false), label: text("label", "LIQUOR"), promptMessage: {
        display: true,
        message: "this is the prompt message"
    } })); })
    .addWithJSX("Radio with add below", function () { return (React.createElement(Radio, { text: text("text", "7. radio button with label and addon below label"), optionList: optionValueArray.map(function (opt, index) {
        return object("optionItem[" + index + "]", opt);
    }), onChange: valueChangeHandler, disabled: boolean("disabled", false), radioLabelLineBreak: boolean("radioLabelLineBreak", false), label: text("label", "LIQUOR"), addOnBelowText: object("addOnBelowText", React.createElement("div", null, " ------------ ")) })); });
//# sourceMappingURL=radio.stories.js.map