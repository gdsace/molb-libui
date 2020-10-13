import React from "react";

import { storiesOf } from "@storybook/react";
import { FlexDirectionType, FlexWrapper } from "../../components";
import { CategoryName } from "../utils";
const styles = require("./flexWrapper.stories.scss");

storiesOf(CategoryName.FlexWrapper, module)
  .add("FlexWrapper Row", () => (
    <div>
      <FlexWrapper>
        <div className={styles.child}>1st child</div>
        <div className={styles.child}>2nd child</div>
      </FlexWrapper>
    </div>
  ))
  .add("FlexWrapper Column", () => (
    <div>
      <FlexWrapper flexDirection={FlexDirectionType.COLUMN}>
        <div className={styles.child}>1st child</div>
        <div className={styles.child}>2nd child</div>
      </FlexWrapper>
    </div>
  ));
