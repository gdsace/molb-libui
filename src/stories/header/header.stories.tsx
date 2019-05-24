import React from "react";

import { storiesOf } from "@storybook/react";
import { Header, HeaderType } from "../../components";
import { CategoryName, wInfo } from "../utils";
const styles = require("./header.stories.scss");

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "Header",
  wInfo(``)(() => (
    <div>
      <div className={styles.demo}>
        <Header className={HeaderType.Demo}>
          <h4>Demo Header</h4>
        </Header>
      </div>
      <div className={styles.main}>
        <Header>
          <h4>Main Header</h4>
        </Header>
      </div>
      <div className={styles.rfa}>
        <Header className={HeaderType.Rfa}>
          <h4>RFA Header</h4>
        </Header>
      </div>
    </div>
  ))
);
