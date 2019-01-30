import React from "react";

import { storiesOf } from "@storybook/react";
import { Icon } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./icon.stories.scss");

const icons = [
  { type: "business" },
  { type: "checkbox" },
  { type: "add" },
  { type: "alert" },
  { type: "arrowNext" },
  { type: "arrowPrev" },
  { type: "business" },
  { type: "check" },
  { type: "checkbox" },
  { type: "checkmark" },
  { type: "checkmark-outline" },
  { type: "close" },
  { type: "dashboard" },
  { type: "delete" },
  { type: "document" },
  { type: "dropdown" },
  { type: "email" },
  { type: "error" },
  { type: "external-link" },
  { type: "help" },
  { type: "information" },
  { type: "informational" },
  { type: "logout" },
  { type: "new-card" },
  { type: "notification-checkmark" },
  { type: "notification-error" },
  { type: "payment" },
  { type: "profile" },
  { type: "progress" },
  { type: "radioDisabledUnselected" },
  { type: "radioEnabledUnselected" },
  { type: "radioSelected" },
  { type: "retrieve" },
  { type: "store" },
  { type: "time" },
  { type: "uen" },
  { type: "upload" },
  { type: "verify" },
  { type: "warning" }
];

const licenceIcons = [
  { type: "cot" },
  { type: "cou" },
  { type: "customs-account" },
  { type: "fire-safety" },
  { type: "food-shop" },
  { type: "halal" },
  { type: "import" },
  { type: "liquor" },
  { type: "new-licence" },
  { type: "outdoor" },
  { type: "petroleum-n-flammable" },
  { type: "public-entertainment" },
  { type: "tobacco-retail" },
  { type: "warning" }
];

(storiesOf(CategoryName.Icons, module) as any).addWithJSX(
  "Icon",
  wInfo(``)(() => (
    <div>
      <h6 className={styles.header}>Icons</h6>
      {icons.map((icon, index) => {
        return (
          <div key={index} className={styles.iconWrapper}>
            <div className={styles.icon}>
              <Icon type={icon.type} />
            </div>
            <div>
              <label>{icon.type}</label>
            </div>
          </div>
        );
      })}
      <br />
      <h6 className={styles.header}>Licences Icons</h6>
      {licenceIcons.map((icon, index) => {
        return (
          <div key={index} className={styles.iconWrapper}>
            <div className={styles.icon}>
              <Icon category={"licences"} type={icon.type} />
            </div>
            <div>
              <label>{icon.type}</label>
            </div>
          </div>
        );
      })}
    </div>
  ))
);
