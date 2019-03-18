var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { Radio } from "../../components/radio";
import { CategoryName, wInfo } from "../utils";
var styles = require("./radio.scss");
var valueChangeHandler = function (value) {
    store.set({ value: value });
};
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
var radioProps = {
    text: "1. all enable radio buttons",
    optionList: optionValueArray,
    onChange: valueChangeHandler,
    disabled: false,
    showError: true,
    errorMsg: "This field is required."
};
var valueChangeHandler2 = function (value) {
    store2.set({ value: value });
};
var optionValueArray2 = [
    {
        value: "value1",
        label: "yes"
    },
    {
        value: "value2",
        label: "no"
    }
];
var radioProps2 = {
    text: "2. all disabled radio buttons",
    optionList: optionValueArray2,
    onChange: valueChangeHandler2,
    disabled: true,
    value: "value1",
    radioTextStyleOverride: styles.overrideRadioText,
    labelStyleOverride: styles.overrideRadioLabel
};
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
var valueChangeHandler3 = function (value) {
    store3.set({ value: value });
};
var radioProps3 = {
    text: "3. mixed disabled and enabled radio buttons",
    optionList: optionValueArray3,
    onChange: valueChangeHandler3,
    disabled: false,
    value: "value1"
};
/**
 * Here define store, we can define our state here.
 * If we define store here, the same property in props won't work.
 */
var store = new Store({
    value: ""
});
var store2 = new Store({
    // if we have the value in the state, the value in props won't work.
    value: "value1"
});
var store3 = new Store({
    value: ""
});
/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
storiesOf(CategoryName.SelectionControls, module).addWithJSX("Radio", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement(State, { store: store },
        React.createElement(Radio, __assign({}, radioProps))),
    React.createElement(State, { store: store2 },
        React.createElement(Radio, __assign({}, radioProps2))),
    React.createElement(State, { store: store3 },
        React.createElement(Radio, __assign({}, radioProps3))))); }));
//# sourceMappingURL=radio.stories.js.map