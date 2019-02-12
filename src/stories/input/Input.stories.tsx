import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Input, InputType, Size } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./input.stories.scss");

const placeholder = "Enter text";
const helperMsg = "Helper text";
const errorMsg = "Validation error message, blah blah blah...";

(storiesOf(CategoryName.TextFields, module) as any).addWithJSX(
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
            label={"Tooltip"}
            size={Size.Large}
            value="Text input with toolTip"
            showTooltip={true}
            toolTipsContent={
              <div>
                Something need to show like below - <br />
                Please follow this general format:
                <br />
                E.g. use ’01’, it represents ‘1st floor’. In the same way:
                <br />
                10 = 10th floor
                <br />
                MEZZ = Mezzanine
                <br />
                RF = Roof
                <br />
                B1 = Basement 1<br />
              </div>
            }
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
            toolTipsContent={
              "Please follow this general format: E.g. use ’01’, it represents ‘1st floor’. In the same way: 02 = 2nd floor, 10 = 10th floor, MEZZ = Mezzanine, RF = Roof, B1 = Basement 1"
            }
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

      <h6 className={styles.groupHeader}>
        Numbers Input: Typing filter(s) samples, Integer/Decimal:
      </h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.IntegerText}
            placeholder={placeholder}
            label={"Integer"}
            size={Size.Large}
            maxLength={10}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.PositiveIntegerText}
            placeholder={placeholder}
            label={"PositiveInteger"}
            size={Size.Large}
            maxLength={10}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.DecimalText}
            placeholder={placeholder}
            label={"Decimal"}
            size={Size.Large}
            maxLength={10}
          />
        </div>
        <div className={styles.box}>
          <Input
            onChange={action("value")}
            type={InputType.PositiveDecimalText}
            placeholder={placeholder}
            label={"PositiveDecimal"}
            size={Size.Large}
            maxLength={10}
          />
        </div>
      </div>
    </div>
  ))
);
