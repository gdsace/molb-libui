import React from "react";

import { SubFormSection, SubFormSectionTheme } from "../../components";

const styles = require("./subFormSection.stories.scss");

export const _SubFormSection = () => (
  <div>
    <div className={styles.box}>
      <SubFormSection id="operatingHoursSubSection" title="Standard Operating Hours" theme={SubFormSectionTheme.Zero}>
        <p className={styles.content}>Theme: Zero, Some sample content</p>
      </SubFormSection>
    </div>
    <div className={styles.box}>
      <SubFormSection id="operatingHoursSubSection" title="Standard Operating Hours" theme={SubFormSectionTheme.Normal}>
        <p className={styles.content}>Theme: Normal, Some sample content</p>
      </SubFormSection>
    </div>
    <div className={styles.box}>
      <SubFormSection
        id="operatingHoursSubSection"
        title="This is a collapsible sub-section"
        isCollapsible={true}
        theme={SubFormSectionTheme.Normal}
      >
        <p>Theme: Normal, Some sample content</p>
      </SubFormSection>
    </div>
    <div className={styles.box}>
      <SubFormSection
        id="operatingHoursSubSection"
        title="This is a collapsible sub-section"
        isCollapsible={true}
        theme={SubFormSectionTheme.Normal}
        tooltip="This is tooltip"
      >
        <p>Theme: Normal, Some sample content</p>
      </SubFormSection>
    </div>
  </div>
);

export default {
  title: "SubFormSection",
  component: SubFormSection
};
