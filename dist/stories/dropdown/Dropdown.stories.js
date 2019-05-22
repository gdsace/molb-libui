import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Dropdown, MultiSelect, PremiseDropdown } from "../../components";
import { CategoryName, wInfo } from "../utils";
import { mockOptions, mockOptionsForDays } from "./mockDropdownStories";
var styles = require("./dropdown.stories.scss");
var store = new Store({
    error: "click will remove the error",
    value: [
        {
            value: "Mon",
            label: "Mon"
        }
    ]
});
var clearErrorMessage = function () {
    store.set({ error: "" });
};
var onDataChange = function (dataArray) {
    action("data")(dataArray.map(function (data) { return data.label; }).join(" "));
    store.set({
        value: dataArray
    });
};
/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
storiesOf(CategoryName.Dropdown, module).addWithJSX("Dropdown", wInfo("")(function () { return (React.createElement("div", { className: styles.rootContainer },
    React.createElement("h6", { className: styles.groupHeader }, "PremiseDropdown: ..."),
    React.createElement("div", { className: styles.itemsContainer },
        React.createElement("div", { className: styles.box },
            React.createElement(PremiseDropdown, { options: mockOptions }))),
    React.createElement("h6", { className: styles.groupHeader }, "Dropdown: ..."),
    React.createElement("div", { className: styles.itemsContainer },
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Normal: with label"),
            React.createElement(Dropdown, { label: "Label", options: mockOptions, onChange: action("value") })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Disabled:"),
            React.createElement(Dropdown, { options: mockOptions, isDisabled: true })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Validation Error:"),
            React.createElement(Dropdown, { options: mockOptions, error: "Some error" }),
            React.createElement("p", { className: styles.content }, "Other following contents (Input error msg should float on this)")),
        React.createElement("div", { className: styles.multiSelectBox },
            React.createElement(State, { store: store },
                React.createElement(MultiSelect, { error: store.state.error, options: mockOptionsForDays, onFocus: clearErrorMessage, onChange: onDataChange, selectedValue: store.state.value })))))); }));
//# sourceMappingURL=Dropdown.stories.js.map