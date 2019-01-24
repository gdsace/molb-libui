import React from "react";

import { storiesOf } from "@storybook/react";
import { H7 } from "../../components";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "H7",
  wInfo(``)(() => <H7>This is an example component</H7>)
);
