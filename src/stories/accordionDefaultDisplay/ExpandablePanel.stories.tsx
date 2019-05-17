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
        content={["this is a content div1", "this is a content div2"]}
        title={"ExpandablePanel Header"}
        defaultDisplay={1}
      />
    </div>
  ))
);
