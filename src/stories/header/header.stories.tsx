import React from "react";

import { storiesOf } from "@storybook/react";
import { Header, HeaderType } from "../../components";
import { CategoryName } from "../utils";
const styles = require("./header.stories.scss");

storiesOf(CategoryName.Others, module).add("Header", () => (
  <div>
    <div className={styles.default}>
      <Header className={HeaderType.Demo}>
        <h4>Demo Header</h4>
      </Header>
    </div>
    <div className={styles.main}>
      <Header className={HeaderType.Main}>
        <h4>Main Header</h4>
      </Header>
    </div>
  </div>
));
