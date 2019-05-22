import React from "react";
import { storiesOf } from "@storybook/react";
import { PremiseDropdown, Tabs } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./tabs.stories.scss");
var list = [
    {
        label: "tab 1",
        tabPanel: (React.createElement("div", null,
            React.createElement("label", null, "Sample Content 1")))
    },
    {
        label: "tab 2",
        tabPanel: (React.createElement("div", null,
            React.createElement("label", null, "Sample Content 2")))
    }
];
var leftNodeStyles = {
    fontWeight: 1000
};
var leftNode = (React.createElement("div", { style: leftNodeStyles }, "You can define your left component here; And define the left and right padding"));
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
var leftNode2 = React.createElement(PremiseDropdown, { options: mockOptions });
storiesOf(CategoryName.Tabs, module).addWithJSX("Tabs", wInfo("")(function () { return (React.createElement("div", { className: styles.rootContainer },
    React.createElement("h6", { className: styles.groupHeader }, "Tabs:..."),
    React.createElement("div", { className: styles.itemsContainer },
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Normal"),
            React.createElement(Tabs, { list: list })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Normal: with customized tabsBarContentStyle"),
            React.createElement(Tabs, { list: list, tabsBarContentStyle: styles.tabsBarContentStyle })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "With left node"),
            React.createElement(Tabs, { leftNode: leftNode, list: list })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "With left-node 2"),
            React.createElement(Tabs, { leftNode: leftNode2, list: list }))))); }));
//# sourceMappingURL=tabs.stories.js.map