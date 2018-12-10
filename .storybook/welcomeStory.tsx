import React from "react";

import { storiesOf } from "@storybook/react";
// @ts-ignore
import { wInfo } from "./utils";

(storiesOf("Welcome", module) as any).addWithJSX(
  "to your new Storybook🎊",
  wInfo(`
    ### Introduction

    We can write some introduction for this component.

    ### Usage
    ~~~js
    <div>We can show how our component works with Markdown format</div>
    ~~~
  `)(() => <div>We can display how component works here</div>)
);
