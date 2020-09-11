import { boolean, number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ExpandablePanelTheme } from "../../components";
import { ExpandablePanel } from "../../components/expandablePanel/ExpandablePanel";
import { CategoryName } from "../utils";
var ThemeList = Object.keys(ExpandablePanelTheme).map(function (k) { return ExpandablePanelTheme[k]; });
storiesOf(CategoryName.Accordion, module)
    .addWithJSX("ExpandablePanel", function () { return (React.createElement(ExpandablePanel, { theme: select("theme", ThemeList, ExpandablePanelTheme.Standard), title: text("title", "ExpandablePanel Header"), subTitle: text("subTitle", "View All"), defaultDisplay: number("defaultDisplay", 1) },
    React.createElement("p", null, " this is div1"),
    React.createElement("p", null, " this is div2"),
    React.createElement("p", null, " this is div3"),
    React.createElement("p", null, " this is div4"))); })
    .addWithJSX("ExpandablePanel collapsed", function () { return (React.createElement(ExpandablePanel, { collapsed: boolean("collapsed", false), theme: select("theme", ThemeList, ExpandablePanelTheme.Standard), title: text("title", "ExpandablePanel Header"), subTitle: text("subTitle", "View All"), defaultDisplay: number("defaultDisplay", 2) },
    React.createElement("p", null, " this is div1"),
    React.createElement("p", null, " this is div2"),
    React.createElement("p", null, " this is div3"),
    React.createElement("p", null, " this is div4"))); });
//# sourceMappingURL=ExpandablePanel.stories.js.map