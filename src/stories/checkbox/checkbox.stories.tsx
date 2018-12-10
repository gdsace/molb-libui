import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { Checkbox } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

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
      <div>
        <State store={store}>
          <Checkbox
            checked={store.checked}
            disabled={false}
            onCheckboxClick={onCheckboxClick}
          />
        </State>
        <Checkbox
          checked={false}
          disabled={true}
          onCheckboxClick={onCheckboxClick}
        />
        <Checkbox
          checked={true}
          disabled={true}
          onCheckboxClick={onCheckboxClick}
        />
      </div>
    );
  })
);
