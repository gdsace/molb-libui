import React from "react";

import { storiesOf } from "@storybook/react";
// @ts-ignore
import { wInfo } from "./utils";

storiesOf("0.Introduction", module).add(
  "Terms / Definitions",
  wInfo(`
    ### Terms:
    1.Components;

    2.Modules: Consist of several Components;

    3.Templates: Consist of Modules;

    ### Items Structure Definition:
    ~~~code
    +-- 0.Introduction
    |
    +-- Buttons (This's the Component-Category-Name)
    |  |
    |  +-- Button (This's the Component-Name)
    |  +-- IconButton
    |
    +-- ...
    |
    +-- Others
    |  |
    +  |-- Component-A (Components that not defined in the Design-System)
    ~~~
  `)(() => <div />)
);
