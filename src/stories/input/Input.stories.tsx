import React from "react";

import { Input } from "@src/components";
import { InputType, Size } from "@src/components/EnumValues";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const styles = require("./input.stories.scss");

const placeholder = "Input text";
const helperMsg = "Helper text";
const errorMsg = "Validation error message, blah blah blah...";

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
            size={Size.Large}
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
            size={Size.Small}
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
            placeholder={placeholder}
            type={InputType.Text}
            label={"Text"}
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
            showCharacterCount={true}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Normal: Helper"}
            size={Size.Large}
            showHelper={true}
            value="Text input with helper text"
            helperMsg={helperMsg}
            showCharacterCount={true}
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
            helperMsg={helperMsg}
            showCharacterCount={true}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Disable: with placeholder"}
            size={Size.Large}
            disabled={true}
            helperMsg={helperMsg}
            showCharacterCount={true}
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
            showCharacterCount={true}
          />
          <p className={styles.content}>
            Other following contents (Input error msg should float on this)
          </p>
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
            toolTipsContent={"Something need to show..."}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            placeholder={placeholder}
            type={InputType.Text}
            label={"Suffix"}
            size={Size.Large}
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
            maxLength={10}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.Number}
            placeholder={placeholder}
            label={"Number MaxLength=10"}
            size={Size.Large}
            value="123"
            maxLength={10}
          />
        </div>
      </div>
    </div>
  ))
);
