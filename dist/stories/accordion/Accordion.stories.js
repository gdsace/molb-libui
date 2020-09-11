import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AccordionTheme } from "../../components";
import { Accordion } from "../../components/accordion/Accordion";
import { CategoryName } from "../utils";
var ThemeList = Object.keys(AccordionTheme).map(function (k) { return AccordionTheme[k]; });
storiesOf(CategoryName.Accordion, module)
    .addWithJSX("Accordion", function () { return (React.createElement(React.Fragment, null,
    React.createElement("h6", null, "Standard Accordion"),
    React.createElement("div", null,
        React.createElement(Accordion, { displayMode: boolean("displayMode", false), theme: select("theme", ThemeList, AccordionTheme.Standard), header: text("header", "Accordion Header Text"), subHeader: [
                text("subHeader[0]", "Collapse"),
                text("subHeader[1]", "Expand")
            ], content: React.createElement("div", null, "this is a content div, content is a render-props"), onPanelClick: function () {
                alert("onPanelClick!");
            } })),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement("h6", null, "Wrapped Accordion With Allowed FreeStyling"),
    React.createElement("div", null,
        React.createElement(Accordion, { displayMode: boolean("displayMode", false), theme: select("theme", ThemeList, AccordionTheme.WrappedFreeStyle), header: React.createElement("div", { style: { padding: "1em" } }, "Accordion header div has its own padding"), subHeader: [
                text("subHeader[0]", "Collapse"),
                text("subHeader[1]", "Expand")
            ], content: React.createElement("div", { style: { backgroundColor: "lightgrey", padding: "1em" } }, "Likewise this content div has it's own padding and background color"), onPanelClick: function () {
                alert("onPanelClick!");
            } })))); })
    .addWithJSX("Accordion collapsed", function () { return (React.createElement(React.Fragment, null,
    React.createElement("h6", null, "Fixed collapsed/expanded Accordion"),
    React.createElement("div", null,
        React.createElement(Accordion, { collapsed: boolean("collapsed", false), theme: select("theme", ThemeList, AccordionTheme.Standard), header: text("header", "Accordion Header Text"), subHeader: [
                text("subHeader[0]", "Collapse"),
                text("subHeader[1]", "Expand")
            ], content: React.createElement("div", null, "The expand icon is not clickable if pass the collapsed props"), onPanelClick: function () {
                alert("onPanelClick!");
            } })))); });
//# sourceMappingURL=Accordion.stories.js.map