import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import React from "react";
import { Dropdown, MultiSelect, PremiseDropdown } from "../../components";
import { mockOptions, mockOptionsForDays } from "./mockDropdownStories";

const store = new Store({
  error: "click will remove the error",
  value: [
    {
      value: "Mon",
      label: "Mon-label"
    }
  ]
});

const onDataChange = (dataArray: any) => {
  action("data")(dataArray.map((data: any) => data.label).join(" "));
  store.set({
    value: dataArray,
    error: ""
  });
};

export const NormalDropdown = () => (
  <Dropdown
    label={text("label", "Normal Dropdown Label")}
    options={mockOptions}
    onChange={action("onchangeValue")}
    isDisabled={boolean("isDisabled", false)}
    error={text("error", "")}
    editable={boolean("editable", false)}
    textInputValue={text("textInputValue", "this is value")}
  />
);

export const _PremiseDropdown = () => <PremiseDropdown options={mockOptions} />;

_PremiseDropdown.story = {
  name: "PremiseDropdown"
};

export const MultiSelectDropdown = () => (
  <State store={store}>
    <MultiSelect
      isMulti
      formatOptionLabel={o => o.label}
      options={mockOptionsForDays}
      onChange={onDataChange}
      // selectedValue={store.state.value}
      value={store.state.value}
      defaultValue={store.state.value}
      closeMenuOnSelect={boolean("closeMenuOnSelect", false)}
      placeholder={text("placeholder", "place holder...")}
      error={text("error", "error message here")}
    />
  </State>
);

MultiSelectDropdown.story = {
  name: "MultiSelect Dropdown"
};

export default {
  title: "Dropdown",
  component: Dropdown
};
