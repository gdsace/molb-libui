import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { Checkbox, CheckboxTheme } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./checkbox.stories.scss");

const store = new Store({
  checked: false
});

const onCheckboxClick = (value: string) => {
  store.set({ checked: value });
};

(storiesOf(CategoryName.SelectionControls, module) as any).addWithJSX(
  "Checkbox",
  wInfo(``)(() => {
    return (
      <div className={styles.rootContainer}>
        <h6 className={styles.groupHeader}>Checkbox: ...</h6>
        <div className={styles.itemsContainer}>
          <div className={styles.box}>
            <p className={styles.notes}>Normal:</p>
            <State store={store}>
              <Checkbox checked={store.state.checked} disabled={false} onCheckboxClick={onCheckboxClick} />
            </State>
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>With clickable element:</p>
            <State store={store}>
              <Checkbox
                checked={store.checked}
                disabled={false}
                onCheckboxClick={onCheckboxClick}
                clickableElement={"Clickable label"}
              />
            </State>
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Disabled:</p>
            <Checkbox checked={false} disabled={true} onCheckboxClick={onCheckboxClick} />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Disabled with clickable element:</p>
            <Checkbox
              checked={false}
              disabled={true}
              onCheckboxClick={onCheckboxClick}
              clickableElement={"Clickable label also disabled"}
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Disabled and checked:</p>
            <Checkbox checked={true} disabled={true} onCheckboxClick={onCheckboxClick} />
          </div>
        </div>
        <h6 className={styles.groupHeader}>Different Theme : ...</h6>
        <State store={store}>
          <p className={styles.notes}>orange:</p>
          <Checkbox
            checked={store.state.checked}
            disabled={false}
            onCheckboxClick={onCheckboxClick}
            theme={CheckboxTheme.ORANGE}
          />
          <p className={styles.notes}>purple:</p>
          <Checkbox
            checked={store.state.checked}
            disabled={false}
            onCheckboxClick={onCheckboxClick}
            theme={CheckboxTheme.PURPLE}
          />
          <p className={styles.notes}>green:</p>
          <Checkbox
            checked={store.state.checked}
            disabled={false}
            onCheckboxClick={onCheckboxClick}
            theme={CheckboxTheme.GREEN}
          />
        </State>

        <h6 className={styles.groupHeader}>Checkbox with addon below : ...</h6>
        <State store={store}>
          <Checkbox
            checked={store.state.checked}
            disabled={false}
            onCheckboxClick={onCheckboxClick}
            addonBelow={<span style={{ color: "orange" }}>edited by applicant</span>}
          />
        </State>
      </div>
    );
  })
);
