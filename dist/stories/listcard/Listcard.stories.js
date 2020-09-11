import React from "react";
import { storiesOf } from "@storybook/react";
import { Listcard, ListcardStatus, Size, Theme } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./Listcard.stories.scss");
var listCardTitle = function (text) { return (React.createElement("p", { className: styles.listCardTitle }, text)); };
var listCardSubtitle = function (text) { return (React.createElement("p", { className: styles.listCardSubtitle }, text)); };
storiesOf(CategoryName.Cards, module).addWithJSX("Listcard", wInfo("default")(function () { return (React.createElement("div", { style: { margin: "20px" } },
    React.createElement(Listcard, { buttonText: "Action Button", status: ListcardStatus.Normal }),
    React.createElement(Listcard, { buttonText: "Action Button", tag: "Expires on 8 Oct 2018", status: ListcardStatus.Expries }),
    React.createElement(Listcard, { title: listCardTitle("Custom styled component"), subTitle: listCardSubtitle("Custom styled quotation no. 12345"), twoContainers: true, buttonTheme: Theme.GAGreen, buttonIcon: "external-link", buttonSize: Size.Small, onButtonClick: function () { return window.open("www.google.com", "_blank"); }, description: React.createElement("div", { className: styles.cardColumn },
            React.createElement("div", null,
                React.createElement("p", { className: styles.columnTitle }, "Styled Column 1"),
                React.createElement("p", { className: styles.columnValue }, "Styled column value")),
            React.createElement("div", null,
                React.createElement("p", { className: styles.columnTitle }, "Styled Column 2"),
                React.createElement("p", { className: styles.columnValue }, "Styled column value")),
            React.createElement("div", null,
                React.createElement("p", { className: styles.columnTitle }, "Styled Column 3"),
                React.createElement("p", { className: styles.columnValue }, "Styled column value"))), buttonText: "View Details" }))); }));
//# sourceMappingURL=Listcard.stories.js.map