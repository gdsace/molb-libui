import React from "react";

import { Layout } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const styles = require("./layout.stories.scss");

(storiesOf("Components", module) as any).addWithJSX(
  "Layout",
  wInfo(``)(() => (
    <div className={styles.rootContainer}>
      <h6 className={styles.groupHeader}>
        Bellow are different size: Large, Medium, Small
      </h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>Normal</p>
          <Layout
            hasNotifications={true}
            header={<p className={styles.headerContent}>Header</p>}
            mainContent={<p>Main Content</p>}
            sidebar={<p>Side Bar</p>}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Normal: with customized class</p>
          <Layout
            hasNotifications={true}
            sideBarStyle={styles.sideBarStyle}
            mainContentStyle={styles.mainContentStyle}
            header={<p className={styles.headerContent}>Header</p>}
            mainContent={<p>Main Content</p>}
            sidebar={<p>Side Bar</p>}
          />
        </div>
      </div>
    </div>
  ))
);
