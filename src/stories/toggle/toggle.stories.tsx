import React from "react";

import { storiesOf } from "@storybook/react";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.SelectionControls, module) as any).addWithJSX(
  "Toggle",
  wInfo(``)(() => <div>Toggle:: To be implemented...</div>)
);
