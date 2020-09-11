import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Dropdown, MultiSelect, PremiseDropdown } from "../../components";
import { CategoryName } from "../utils";
import { mockOptions, mockOptionsForDays } from "./mockDropdownStories";
var store = new Store({
    error: "click will remove the error",
    value: [
        {
            value: "Mon",
            label: "Mon-label"
        }
    ]
});
var onDataChange = function (dataArray) {
    action("data")(dataArray.map(function (data) { return data.label; }).join(" "));
    store.set({
        value: dataArray,
        error: ""
    });
};
storiesOf(CategoryName.Dropdown, module)
    .addWithJSX("Normal Dropdown", function () { return (React.createElement(Dropdown, { label: text("label", "Normal Dropdown Label"), options: mockOptions, onChange: action("onchangeValue"), isDisabled: boolean("isDisabled", false), error: text("error", ""), editable: boolean("editable", false), textInputValue: text("textInputValue", "this is value") })); })
    .addWithJSX("PremiseDropdown", function () { return (React.createElement(PremiseDropdown, { options: mockOptions })); })
    .addWithJSX("MultiSelect Dropdown", function () { return (React.createElement(State, { store: store },
    React.createElement(MultiSelect, { isMulti: true, formatOptionLabel: function (o) { return o.label; }, options: mockOptionsForDays, onChange: onDataChange, 
        // selectedValue={store.state.value}
        value: store.state.value, defaultValue: store.state.value, closeMenuOnSelect: boolean("closeMenuOnSelect", false), placeholder: text("placeholder", "place holder..."), error: text("error", "error message here") }))); });
//# sourceMappingURL=Dropdown.stories.js.map