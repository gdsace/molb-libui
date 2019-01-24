import React from "react";

import { storiesOf } from "@storybook/react";

import { NavItem } from "../../components/navItem/NavItem";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "NavItem",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      <NavItem type={"dashboard"} label={"This is Label"} />
    </div>
  ))
);
