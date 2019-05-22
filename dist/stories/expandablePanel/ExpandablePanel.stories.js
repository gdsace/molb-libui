import { storiesOf } from "@storybook/react";
import React from "react";
import { ExpandablePanelTheme } from "../../components";
import { ExpandablePanel } from "../../components/expandablePanel/ExpandablePanel";
import { CategoryName, wInfo } from "../utils";
storiesOf(CategoryName.Accordion, module).addWithJSX("ExpandablePanel", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement(ExpandablePanel, { theme: ExpandablePanelTheme.Standard, title: "ExpandablePanel Header", subTitle: "View All", defaultDisplay: 1 },
        React.createElement("p", null, " this is div1"),
        React.createElement("p", null, " this is div2")))); }));
//# sourceMappingURL=ExpandablePanel.stories.js.map