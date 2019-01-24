import React from "react";

import { storiesOf } from "@storybook/react";
import { Icon } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./icon.stories.scss");

const icons = [
  { type: "new-card" },
  { type: "store" },
  { type: "alert" },
  { type: "arrowNext" },
  { type: "arrowPrev" },
  { type: "business" },
  { type: "check" },
  { type: "checkbox" }
];
(storiesOf(CategoryName.Icons, module) as any).addWithJSX(
  "Icon",
  wInfo(``)(() => (
    <div>
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
    </div>
  ))
);
