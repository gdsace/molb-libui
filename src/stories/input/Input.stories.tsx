import React from "react";

import { Input } from "@src/components";
import { InputType, Size } from "@src/components/EnumValues";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const styles = require("./input.stories.scss");

const placeholder = "Input text";
const helperMsg = "Helper text";
const errorMsg = "Validation error message";

(storiesOf("Components", module) as any).addWithJSX(
  "Input",
  wInfo(``)(() => (
    <div className={styles.rootContainer}>
      <h6 className={styles.groupHeader}>
        Bellow are different size: Large, Medium, Small
      </h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Large"}
            size={Size.Small}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Medium"}
            size={Size.Medium}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Small"}
            size={Size.Large}
          />
        </div>
      </div>

      <h6 className={styles.groupHeader}>
        Bellow are different Type: Number, Text
      </h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Number}
            label={"Number"}
            size={Size.Large}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder="this is text input"
            type={InputType.Text}
            label={"Text"}
            value=""
            size={Size.Large}
          />
        </div>
      </div>

      <h6 className={styles.groupHeader}>
        Bellow are different looks: Normal, Error, Disable, WithHelper,
        WithToolTip, WithSuffix
      </h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.Text}
            placeholder={placeholder}
            label={"Normal"}
            value=""
            size={Size.Large}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.Text}
            label={"Disable"}
            size={Size.Large}
            value="Text input disabled"
            disabled={true}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Error"}
            size={Size.Large}
            showError={true}
            value="Text input with error"
            errorMsg={errorMsg}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Helper"}
            size={Size.Large}
            showHelper={true}
            value="Text input with helper text"
            helperMsg={helperMsg}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Tooltip"}
            size={Size.Large}
            value="Text input with toolTip"
            showTooltip={true}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Suffix"}
            size={Size.Large}
            value=""
            suffix={"suffix"}
          />
        </div>
      </div>

      <h6 className={styles.groupHeader}>
        Bellow are some length limit for input
      </h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.Text}
            placeholder={placeholder}
            label={"Text MaxLength=10"}
            size={Size.Large}
            value=""
            maxLength={10}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.Number}
            label={"Number MaxLength=10"}
            size={Size.Large}
            value=""
            maxLength={10}
          />
        </div>
      </div>
    </div>
  ))
);
