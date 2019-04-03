import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { IOptionValue, IRadioProps, Radio } from "../../components/radio";
import { CategoryName, wInfo } from "../utils";
const styles = require("./radio.scss");

const valueChangeHandler = (value: string) => {
  store.set({ value });
};
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

const radioProps: IRadioProps = {
  text: "1. all enable radio buttons",
  optionList: optionValueArray,
  onChange: valueChangeHandler,
  disabled: false,
  showError: true,
  errorMsg: "This field is required.",
  radioLabelLineBreak: false
};

const valueChangeHandler2 = (value: string) => {
  store2.set({ value });
};
const optionValueArray2: IOptionValue[] = [
  {
    value: "value1",
    label: "yes"
  },
  {
    value: "value2",
    label: "no"
  }
];

const radioProps2: IRadioProps = {
  text: "2. all disabled radio buttons",
  optionList: optionValueArray2,
  onChange: valueChangeHandler2,
  disabled: true,
  value: "value1",
  radioTextStyleOverride: styles.overrideRadioText,
  labelStyleOverride: styles.overrideRadioLabel,
  radioLabelLineBreak: false
};

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

const valueChangeHandler3 = (value: string) => {
  store3.set({ value });
};
const radioProps3: IRadioProps = {
  text: "3. mixed disabled and enabled radio buttons",
  optionList: optionValueArray3,
  onChange: valueChangeHandler3,
  disabled: false,
  value: "value1",
  radioLabelLineBreak: false
};

const valueChangeHandler4 = (value: string) => {
  store4.set({ value });
};
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

const radioProps4: IRadioProps = {
  text: "4. ensure line break for each radio button",
  optionList: optionValueArray4,
  onChange: valueChangeHandler4,
  disabled: false,
  showError: true,
  radioLabelLineBreak: true
};

/**
 * Here define store, we can define our state here.
 * If we define store here, the same property in props won't work.
 */
const store = new Store({
  value: ""
});
const store2 = new Store({
  // if we have the value in the state, the value in props won't work.
  value: "value1"
});
const store3 = new Store({
  value: ""
});
const store4 = new Store({
  value: ""
});

/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
(storiesOf(CategoryName.SelectionControls, module) as any).addWithJSX(
  "Radio",
  wInfo(``)(() => (
    <div>
      <State store={store}>
        <Radio {...radioProps} />
      </State>
      <State store={store2}>
        <Radio {...radioProps2} />
      </State>
      <State store={store3}>
        <Radio {...radioProps3} />
      </State>
      <State store={store4}>
        <Radio {...radioProps4} />
      </State>
    </div>
  ))
);
