import { boolean, number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ExpandablePanelTheme } from "../../components";
import { ExpandablePanel } from "../../components/expandablePanel/ExpandablePanel";
import { CategoryName } from "../utils";

const ThemeList: ExpandablePanelTheme[] = Object.keys(ExpandablePanelTheme).map(
  k => ExpandablePanelTheme[k as any] as ExpandablePanelTheme
);

(storiesOf(CategoryName.Accordion, module) as any)
  .addWithJSX("ExpandablePanel", () => (
    <ExpandablePanel
      theme={select("theme", ThemeList, ExpandablePanelTheme.Standard)}
      title={text("title", "ExpandablePanel Header")}
      subTitle={text("subTitle", "View All")}
      defaultDisplay={number("defaultDisplay", 1)}
    >
      <p> this is div1</p>
      <p> this is div2</p>
      <p> this is div3</p>
      <p> this is div4</p>
    </ExpandablePanel>
  ))
  .addWithJSX("ExpandablePanel collapsed", () => (
    <ExpandablePanel
      collapsed={boolean("collapsed", false)}
      theme={select("theme", ThemeList, ExpandablePanelTheme.Standard)}
      title={text("title", "ExpandablePanel Header")}
      subTitle={text("subTitle", "View All")}
      defaultDisplay={number("defaultDisplay", 2)}
    >
      <p> this is div1</p>
      <p> this is div2</p>
      <p> this is div3</p>
      <p> this is div4</p>
    </ExpandablePanel>
  ));
