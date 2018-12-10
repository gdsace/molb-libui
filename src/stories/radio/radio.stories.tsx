import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { IOptionValue, IRadioProps, Radio } from "../../components/radio/Radio";
import { wInfo } from "../utils";

const valueChangeHanlder = (value: string) => {
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
  onChange: valueChangeHanlder,
  disabled: false
};

const valueChangeHanlder2 = (value: string) => {
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
  onChange: valueChangeHanlder2,
  disabled: true,
  value: "value1"
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

const valueChangeHanlder3 = (value: string) => {
  store3.set({ value });
};
const radioProps3: IRadioProps = {
  text: "3. mixed disabled and enabled radio buttons",
  optionList: optionValueArray3,
  onChange: valueChangeHanlder3,
  disabled: false,
  value: "value1"
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

/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
(storiesOf("Components", module) as any).addWithJSX(
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
    </div>
  ))
);
