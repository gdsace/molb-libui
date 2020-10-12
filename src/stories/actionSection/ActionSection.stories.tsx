import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { ActionSection } from "../../components";
import { CategoryName } from "../utils";

const styles = require("./actionSection.stories.scss");

storiesOf(CategoryName.Others, module).add("ActionSection", () => (
  <div>
    <h6>Action Section with only default Next Button</h6>
    <div className={styles.box}>
      <ActionSection showPrevious={false} showNext={true} onNextClick={action("next-button-click")} />
    </div>
    <h6>Action Section with default Previous and Next Button</h6>
    <div className={styles.box}>
      <ActionSection
        showPrevious={true}
        showNext={true}
        onNextClick={action("next-button-click")}
        onPreviousClick={action("previous-button-click")}
      />
    </div>
    <h6>Action Section with custom Left and Right Button</h6>
    <div className={styles.box}>
      <ActionSection
        showPrevious={true}
        showNext={true}
        onNextLabel="RIGHT"
        onPreviousLabel="LEFT"
        onNextClick={action("next-button-click")}
        onPreviousClick={action("previous-button-click")}
      />
    </div>
    <h6>Action Section with custom Left and loading</h6>
    <div className={styles.box}>
      <ActionSection
        showPrevious={true}
        showNext={true}
        onNextLabel="RIGHT"
        onPreviousLabel="LEFT"
        loading={true}
        onNextClick={action("next-button-click")}
        onPreviousClick={action("previous-button-click")}
      />
    </div>

    <h6>Action Section without right icon </h6>
    <div className={styles.box}>
      <ActionSection
        showPrevious={true}
        showNext={true}
        showNextIcon={false}
        onNextLabel="RIGHT"
        onPreviousLabel="LEFT"
        onNextClick={action("next-button-click")}
        onPreviousClick={action("previous-button-click")}
      />
    </div>
  </div>
));
