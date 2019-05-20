import { storiesOf } from "@storybook/react";
import React from "react";

import { ExpandablePanelTheme } from "../../components";
import { ExpandablePanel } from "../../components/expandablePanel/ExpandablePanel";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.Accordion, module) as any).addWithJSX(
  "ExpandablePanel",
  wInfo(``)(() => (
    <div>
      <ExpandablePanel
        theme={ExpandablePanelTheme.Standard}
        title={"ExpandablePanel Header"}
        subTitle="View All"
        defaultDisplay={1}
      >
        <p> this is div1</p>
        <p> this is div2</p>
      </ExpandablePanel>
    </div>
  ))
);
