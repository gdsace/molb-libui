import { storiesOf } from "@storybook/react";
import React from "react";

import { AccordionTheme } from "../../components";
import { Accordion } from "../../components/accordion/Accordion";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.Accordion, module) as any).addWithJSX(
  "Accordion",
  wInfo(``)(() => (
    <div>
      <h6>Standard Accordion</h6>
      <div>
        <Accordion
          theme={AccordionTheme.Standard}
          content={<div>this is a content div</div>}
          header={"Accordion Header"}
        />
      </div>
      <h6>Large Accordion</h6>
      <div>
        <Accordion
          theme={AccordionTheme.Large}
          content={<div>this is a content div</div>}
          header={"Accordion Header"}
        />
      </div>
      <h6>Wrapped Accordion</h6>
      <div>
        <Accordion
          theme={AccordionTheme.Wrapped}
          content={<div>this is a content div</div>}
          header={"Accordion Header"}
        />
      </div>
    </div>
  ))
);
