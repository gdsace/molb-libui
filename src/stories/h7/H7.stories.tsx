import React from "react";

import { wInfo } from "../utils";
import { storiesOf } from "@storybook/react";
import { H7 } from "@src/components";

(storiesOf("Components", module) as any).addWithJSX(
  "H7",
  wInfo(``)(() => <H7>This is an example component</H7>)
);
