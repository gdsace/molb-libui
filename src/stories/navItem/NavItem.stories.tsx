import React from "react";

import { storiesOf } from "@storybook/react";

import { wInfo } from "../utils";
import { NavItem } from "../../components/navItem/NavItem";

(storiesOf("Components", module) as any).addWithJSX(
  "NavItem",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      <NavItem type={"dashboard"} label={"This is Label"} />
    </div>
  ))
);
