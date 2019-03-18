import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Dropdown, PremiseDropdown } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./dropdown.stories.scss");
var mockOptions = [
    {
        label: "foo bar baz foo bar baz foo bar baz foo bar baz",
        value: {
            address: {
                postalCode: "123456"
            }
        }
    },
    {
        label: "foo bar",
        value: "baz"
    },
    {
        label: "foo bar",
        value: "baz"
    },
    {
        label: "foo bar",
        value: "baz"
    },
    {
        label: "foo bar",
        value: "baz"
    },
    {
        label: "foo bar",
        value: "baz"
    }
];
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
            React.createElement("p", { className: styles.content }, "Other following contents (Input error msg should float on this)"))))); }));
//# sourceMappingURL=Dropdown.stories.js.map