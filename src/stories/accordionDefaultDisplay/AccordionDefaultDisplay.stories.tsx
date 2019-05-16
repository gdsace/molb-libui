import { storiesOf } from "@storybook/react";
import React from "react";

import { AccordionTheme } from "../../components";
import { AccordionDefaultDisplay } from "../../components/accordionDefaultDisplay/AccordionDefaultDisplay";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.Accordion, module) as any).addWithJSX(
  "AccordionDefaltDisplay",
  wInfo(``)(() => (
    <div>
      <AccordionDefaultDisplay
        theme={AccordionTheme.Standard}
        content={["this is a content div1", "this is a content div2"]}
        title={"Accordion Header"}
        defaultDisplay={1}
      />
    </div>
  ))
);
