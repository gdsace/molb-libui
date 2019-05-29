import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Dropdown, MultiSelect, PremiseDropdown } from "../../components";
import { CategoryName, wInfo } from "../utils";
import { mockOptions, mockOptionsForDays } from "./mockDropdownStories";

const styles = require("./dropdown.stories.scss");

const store = new Store({
  error: "click will remove the error",
  value: [
    {
      value: "Mon",
      label: "Mon"
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

/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
(storiesOf(CategoryName.Dropdown, module) as any).addWithJSX(
  "Dropdown",
  wInfo(``)(() => (
    <div className={styles.rootContainer}>
      <h6 className={styles.groupHeader}>PremiseDropdown: ...</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <PremiseDropdown options={mockOptions} />
        </div>
      </div>

      <h6 className={styles.groupHeader}>Dropdown: ...</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>Normal: with label</p>
          <Dropdown
            label="Label"
            options={mockOptions}
            onChange={action("value")}
          />
        </div>

        <div className={styles.box}>
          <p className={styles.notes}>Disabled</p>
          <Dropdown label="Label" isDisabled={true} />
        </div>

        <div className={styles.box}>
          <p className={styles.notes}>Validation Error:</p>
          <Dropdown options={mockOptions} error="Some error" />
          <p className={styles.content}>
            Other following contents (Input error msg should float on this)
          </p>
        </div>

        <div className={styles.multiSelectBox}>
          <State store={store}>
            <MultiSelect
              error={store.state.error}
              options={mockOptionsForDays}
              onChange={onDataChange}
              selectedValue={store.state.value}
            />
          </State>
        </div>
      </div>

      <h6 className={styles.groupHeader}>Dropdown editable: ...</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>editable</p>
          <Dropdown
            error={undefined}
            label={"Label"}
            editable={true}
            textInputValue="this is value"
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>editable</p>
          <Dropdown
            error={undefined}
            isDisabled={true}
            label={"Label"}
            editable={true}
            textInputValue=""
          />
        </div>
      </div>
    </div>
  ))
);
