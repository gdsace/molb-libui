import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { NumberPicker } from "../../components/numberPicker";
import { CategoryName, wInfo } from "../utils";

const styles = require("./numberPicker.stories.scss");

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "NumberPicker",
  wInfo(``)(() => (
    <div>
      <h6>NumberPicker with previous and next button</h6>
      <div className={styles.box}>
        <NumberPicker
          onQuantityChange={action("prev-button-click")}
          handleInputChange={action("prev-button-click")}
          quantity={10}
          min={0}
          max={50}
        />
      </div>
      <h6>NumberPicker with disabled previous button</h6>
      <div className={styles.box}>
        <NumberPicker
          onQuantityChange={action("prev-button-click")}
          handleInputChange={action("prev-button-click")}
          quantity={0}
          min={0}
          max={50}
        />
      </div>
      <h6>NumberPicker with disabled next button</h6>
      <div className={styles.box}>
        <NumberPicker
          onQuantityChange={action("prev-button-click")}
          handleInputChange={action("prev-button-click")}
          quantity={50}
          min={0}
          max={50}
        />
      </div>
      <h6>NumberPicker with error input and disabled next button</h6>
      <div className={styles.box}>
        <NumberPicker
          onQuantityChange={action("prev-button-click")}
          handleInputChange={action("prev-button-click")}
          quantity={55}
          min={0}
          max={50}
        />
      </div>
    </div>
  ))
);
