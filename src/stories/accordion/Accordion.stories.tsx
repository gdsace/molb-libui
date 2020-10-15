import { boolean, select, text } from "@storybook/addon-knobs";
import React from "react";
import { AccordionTheme } from "../../components";
import { Accordion } from "../../components/accordion/Accordion";

const ThemeList: AccordionTheme[] = Object.keys(AccordionTheme).map(
  k => AccordionTheme[k as keyof typeof AccordionTheme]
);

export const Uncontrolled = () => (
  <>
    <h6>Standard Accordion</h6>
    <div>
      <Accordion
        displayMode={boolean("displayMode", false)}
        theme={select("theme", ThemeList, AccordionTheme.Standard)}
        header={text("header", "Accordion Header Text")}
        subHeader={[text("subHeader[0]", "Expand"), text("subHeader[1]", "Collapse")]}
        content={<div>this is a content div, content is a render-props</div>}
        onPanelClick={() => {
          alert("onPanelClick!");
        }}
      />
    </div>
    <br />
    <br />
    <h6>Wrapped Accordion With Allowed FreeStyling</h6>
    <div>
      <Accordion
        displayMode={boolean("displayMode", false)}
        theme={select("theme", ThemeList, AccordionTheme.WrappedFreeStyle)}
        header={<div style={{ padding: "1em" }}>Accordion header div has its own padding</div>}
        subHeader={[text("subHeader[0]", "Expand"), text("subHeader[1]", "Collapse")]}
        content={
          <div style={{ backgroundColor: "lightgrey", padding: "1em" }}>
            Likewise this content div has it&apos;s own padding and background color
          </div>
        }
        onPanelClick={() => {
          alert("onPanelClick!");
        }}
      />
    </div>
  </>
);

export const Controlled = () => (
  <>
    <h6>Fixed collapsed/expanded Accordion</h6>
    <div>
      <Accordion
        collapsed={boolean("collapsed", false)}
        theme={select("theme", ThemeList, AccordionTheme.Standard)}
        header={text("header", "Accordion Header Text")}
        subHeader={[text("subHeader[0]", "Expand"), text("subHeader[1]", "Collapse")]}
        content={<div>The expand icon is not clickable if pass the collapsed props</div>}
        onPanelClick={() => {
          alert("onPanelClick!");
        }}
      />
    </div>
  </>
);

export default {
  title: "Accordion",
  component: Accordion
};
