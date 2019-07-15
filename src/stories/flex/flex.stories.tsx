import React from "react";

import { storiesOf } from "@storybook/react";
import { Flex, FlexDirectionType } from "../../components";
import { CategoryName, wInfo } from "../utils";
const styles = require("./flex.stories.scss");

(storiesOf(CategoryName.Flex, module) as any)
  .addWithJSX(
    "Flex Row",
    wInfo(``)(() => (
      <div>
        <Flex>
          <div className={styles.child}>1st child</div>
          <div className={styles.child}>2nd child</div>
        </Flex>
      </div>
    ))
  )
  .addWithJSX(
    "Flex Column",
    wInfo(``)(() => (
      <div>
        <Flex flexDirection={FlexDirectionType.COLUMN}>
          <div className={styles.child}>1st child</div>
          <div className={styles.child}>2nd child</div>
        </Flex>
      </div>
    ))
  );
