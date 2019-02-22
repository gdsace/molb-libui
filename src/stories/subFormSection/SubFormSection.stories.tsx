import React from "react";

import { storiesOf } from "@storybook/react";
import { SubFormSection, SubFormSectionTheme } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./subFormSection.stories.scss");

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "SubFormSection",
  wInfo(``)(() => {
    return (
      <div>
        <div className={styles.box}>
          <SubFormSection
            id="operatingHoursSubSection"
            title="Standard Operating Hours"
            theme={SubFormSectionTheme.Zero}
          >
            <p className={styles.content}>Theme: Zero, Some sample content</p>
          </SubFormSection>
        </div>
        <div className={styles.box}>
          <SubFormSection
            id="operatingHoursSubSection"
            title="Standard Operating Hours"
            theme={SubFormSectionTheme.Normal}
          >
            <p className={styles.content}>Theme: Normal, Some sample content</p>
          </SubFormSection>
        </div>
      </div>
    );
  })
);
