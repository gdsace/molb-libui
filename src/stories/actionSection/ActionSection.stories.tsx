import React from "react";

import { wInfo } from "../utils";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { ActionSection } from "@src/components";

const styles = require("./actionSection.stories.scss");

(storiesOf("Components", module) as any).addWithJSX(
  "ActionSection",
  wInfo(``)(() => (
    <div>
      <h6>Action Section with only default Next Button</h6>
      <div className={styles.box}>
        <ActionSection
          showPrevious={false}
          showNext={true}
          onNextClick={action("next-button-click")}
        />
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
    </div>
  ))
);
