import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { Checkbox } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const styles = require("./checkbox.stories.scss");

const store = new Store({
  checked: false
});

const onCheckboxClick = (value: string) => {
  store.set({ checked: value });
};

(storiesOf("Components", module) as any).addWithJSX(
  "Checkbox",
  wInfo(``)(() => {
    return (
      <div className={styles.rootContainer}>
        <h6 className={styles.groupHeader}>Checkbox: ...</h6>
        <div className={styles.itemsContainer}>
          <div className={styles.box}>
            <p className={styles.notes}>Normal:</p>
            <State store={store}>
              <Checkbox
                checked={store.checked}
                disabled={false}
                onCheckboxClick={onCheckboxClick}
              />
            </State>
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Disabled:</p>
            <Checkbox
              checked={false}
              disabled={true}
              onCheckboxClick={onCheckboxClick}
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Disabled: and Checked</p>
            <Checkbox
              checked={true}
              disabled={true}
              onCheckboxClick={onCheckboxClick}
            />
          </div>
        </div>
      </div>
    );
  })
);
