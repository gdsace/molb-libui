import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Dropdown, MultiSelect, PremiseDropdown } from "../../components";
import { CategoryName } from "../utils";
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

storiesOf(CategoryName.Dropdown, module)
  .add("Normal Dropdown", () => (
    <Dropdown
      label={text("label", "Normal Dropdown Label")}
      options={mockOptions}
      onChange={action("onchangeValue")}
      isDisabled={boolean("isDisabled", false)}
      error={text("error", "")}
      editable={boolean("editable", false)}
      textInputValue={text("textInputValue", "this is value")}
    />
  ))
  .add("PremiseDropdown", () => <PremiseDropdown options={mockOptions} />)
  .add("MultiSelect Dropdown", () => (
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
  ));
