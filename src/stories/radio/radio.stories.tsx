import { boolean, object, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { noop } from "lodash";
import React from "react";
import { IOptionValue, Radio } from "../../components/radio";
import { CategoryName } from "../utils";
const styles = require("./radio.scss");

const valueChangeHandler = noop;

const optionValueArray: IOptionValue[] = [
  {
    value: "value1",
    label: "yes"
  },
  {
    value: "value2",
    label: "no"
  }
];

const optionValueArray3: IOptionValue[] = [
  {
    value: "value1",
    label: "value1 label"
  },
  {
    value: "value2",
    label: "value2 label"
  },
  {
    value: "value3",
    label: "disabled label",
    disabled: true
  }
];

const optionValueArray4: IOptionValue[] = [
  {
    value: "value1",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum, tellus ut dapibus scelerisque, leo purus consectetur eros, eget tincidunt ipsum turpis et quam. Cras cursus sit amet ante ut pellentesque. Nam lobortis porttitor nisi et vestibulum. Curabitur ac ligula sit amet lorem iaculis porttitor eu sed nunc. Etiam id eleifend ligula, a vehicula mauris. Suspendisse at eros gravida metus sagittis luctus. Maecenas pellentesque, magna sit amet rhoncus rhoncus, est lacus interdum risus, sed auctor lacus felis vel libero."
  },
  {
    value: "value2",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum, tellus ut dapibus scelerisque, leo purus consectetur eros, eget tincidunt ipsum turpis et quam. Cras cursus sit amet ante ut pellentesque. Nam lobortis porttitor nisi et vestibulum. Curabitur ac ligula sit amet lorem iaculis porttitor eu sed nunc. Etiam id eleifend ligula, a vehicula mauris. Suspendisse at eros gravida metus sagittis luctus. Maecenas pellentesque, magna sit amet rhoncus rhoncus, est lacus interdum risus, sed auctor lacus felis vel libero."
  }
];
/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
(storiesOf(CategoryName.SelectionControls, module) as any)
  .addWithJSX("Radio showing errors", () => (
    <Radio
      text={text("text", "1. all enable radio buttons")}
      optionList={optionValueArray.map((opt, index) => object(`optionItem[${index}]`, opt))}
      onChange={valueChangeHandler}
      disabled={boolean("disabled", false)}
      showError={boolean("showError", true)}
      errorMsg={text("errorMsg", "This field is required.")}
      radioLabelLineBreak={boolean("radioLabelLineBreak", false)}
      showTooltip={boolean("showTooltip", false)}
    />
  ))
  .addWithJSX("Radio Disabled", () => (
    <Radio
      text={text("text", "2. all disabled radio buttons")}
      optionList={optionValueArray.map((opt, index) => object(`optionItem[${index}]`, opt))}
      onChange={valueChangeHandler}
      disabled={boolean("disabled", true)}
      value={text("value", "value1")}
      radioTextStyleOverride={styles.overrideRadioText}
      labelStyleOverride={styles.overrideRadioLabel}
      radioLabelLineBreak={boolean("radioLabelLineBreak", false)}
    />
  ))
  .addWithJSX("Radio with enabled and disabled", () => (
    <Radio
      text="3. mixed disabled and enabled radio buttons"
      optionList={optionValueArray3.map((opt, index) => object(`optionItem[${index}]`, opt))}
      onChange={valueChangeHandler}
      disabled={boolean("disabled", false)}
      value={text("value", "value1")}
      radioLabelLineBreak={boolean("radioLabelLineBreak", false)}
    />
  ))
  .addWithJSX("Radio with line break", () => (
    <Radio
      text="4. ensure line break for each radio button"
      optionList={optionValueArray4.map((opt, index) => object(`optionItem[${index}]`, opt))}
      onChange={valueChangeHandler}
      disabled={boolean("disabled", false)}
      showError={boolean("showError", true)}
      radioLabelLineBreak={boolean("radioLabelLineBreak", true)}
    />
  ))
  .addWithJSX("Radio with tooltip", () => (
    <Radio
      text={text("text", "5. radio button with tooltip")}
      optionList={optionValueArray.map((opt, index) => object(`optionItem[${index}]`, opt))}
      onChange={valueChangeHandler}
      disabled={boolean("disabled", false)}
      showError={boolean("showError", false)}
      errorMsg="This field is required."
      radioLabelLineBreak={boolean("radioLabelLineBreak", false)}
      showTooltip={boolean("showTooltip", true)}
      toolTipsContent={text("toolTipsContent", "This is the content you want to show on tooltip")}
    />
  ))
  .addWithJSX("Radio with prompt message", () => (
    <Radio
      text={text("text", "6. radio button with label and prompt message")}
      optionList={optionValueArray.map((opt, index) => object(`optionItem[${index}]`, opt))}
      onChange={valueChangeHandler}
      disabled={boolean("disabled", false)}
      radioLabelLineBreak={boolean("radioLabelLineBreak", false)}
      label={text("label", "LIQUOR")}
      promptMessage={{
        display: true,
        message: "this is the prompt message"
      }}
    />
  ))
  .addWithJSX("Radio with add below", () => (
    <Radio
      text={text("text", "7. radio button with label and addon below label")}
      optionList={optionValueArray.map((opt, index) => object(`optionItem[${index}]`, opt))}
      onChange={valueChangeHandler}
      disabled={boolean("disabled", false)}
      radioLabelLineBreak={boolean("radioLabelLineBreak", false)}
      label={text("label", "LIQUOR")}
      addOnBelowText={object("addOnBelowText", <div> ------------ </div>)}
    />
  ));
