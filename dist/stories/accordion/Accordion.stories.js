import { storiesOf } from "@storybook/react";
import React from "react";
import { AccordionTheme } from "../../components";
import { Accordion } from "../../components/accordion/Accordion";
import { CategoryName, wInfo } from "../utils";
storiesOf(CategoryName.Accordion, module).addWithJSX("Accordion", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("h6", null, "Standard Accordion"),
    React.createElement("div", null,
        React.createElement(Accordion, { theme: AccordionTheme.Standard, content: React.createElement("div", null, "this is a content div"), header: "Accordion Header" })),
    React.createElement("h6", null, "Large Accordion"),
    React.createElement("div", null,
        React.createElement(Accordion, { theme: AccordionTheme.Large, content: React.createElement("div", null, "this is a content div"), header: "Accordion Header" })),
    React.createElement("h6", null, "Wrapped Accordion"),
    React.createElement("div", null,
        React.createElement(Accordion, { theme: AccordionTheme.Wrapped, content: React.createElement("div", null, "this is a content div"), header: "Accordion Header" })))); }));
//# sourceMappingURL=Accordion.stories.js.map