import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./checkbox.stories.scss");
var store = new Store({
    checked: false
});
var onCheckboxClick = function (value) {
    store.set({ checked: value });
};
storiesOf(CategoryName.SelectionControls, module).addWithJSX("Checkbox", wInfo("")(function () {
    return (React.createElement("div", { className: styles.rootContainer },
        React.createElement("h6", { className: styles.groupHeader }, "Checkbox: ..."),
        React.createElement("div", { className: styles.itemsContainer },
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Normal:"),
                React.createElement(State, { store: store },
                    React.createElement(Checkbox, { checked: store.state.checked, disabled: false, onCheckboxClick: onCheckboxClick }))),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "With clickable element:"),
                React.createElement(State, { store: store },
                    React.createElement(Checkbox, { checked: store.checked, disabled: false, onCheckboxClick: onCheckboxClick, clickableElement: "Clickable label" }))),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Disabled:"),
                React.createElement(Checkbox, { checked: false, disabled: true, onCheckboxClick: onCheckboxClick })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Disabled with clickable element:"),
                React.createElement(Checkbox, { checked: false, disabled: true, onCheckboxClick: onCheckboxClick, clickableElement: "Clickable label also disabled" })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Disabled and checked:"),
                React.createElement(Checkbox, { checked: true, disabled: true, onCheckboxClick: onCheckboxClick })))));
}));
//# sourceMappingURL=checkbox.stories.js.map