import React from "react";

import { storiesOf } from "@storybook/react";
import { Header } from "../../components";
import { CategoryName, wInfo } from "../utils";
// const styles = require("./header.stories.scss");

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "Header",
  wInfo(``)(() => (
    <div>
      <Header className={"forStoryBookDemo"}>
        <h4>Header Component</h4>
      </Header>
    </div>
  ))
);
