import React from "react";

import { FlexDirectionType, FlexWrapper } from "../../components";
const styles = require("./flexWrapper.stories.scss");

export const FlexWrapperRow = () => (
  <div>
    <FlexWrapper>
      <div className={styles.child}>1st child</div>
      <div className={styles.child}>2nd child</div>
    </FlexWrapper>
  </div>
);

FlexWrapperRow.story = {
  name: "FlexWrapper Row"
};

export const FlexWrapperColumn = () => (
  <div>
    <FlexWrapper flexDirection={FlexDirectionType.COLUMN}>
      <div className={styles.child}>1st child</div>
      <div className={styles.child}>2nd child</div>
    </FlexWrapper>
  </div>
);

FlexWrapperColumn.story = {
  name: "FlexWrapper Column"
};

export default {
  title: "FlexWrapper",
  component: FlexWrapper
};
