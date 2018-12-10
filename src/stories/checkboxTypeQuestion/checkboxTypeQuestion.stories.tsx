import React from "react";

import { CheckboxTypeQuestion } from "@src/components";
import { wInfo } from "../utils";
import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";

const store = new Store({
  checked: false
});

const onCheckboxClick = (value: string) => {
  store.set({ checked: value });
};

const questionLabel = "Question label";
const questionDescription = "This is question description";

(storiesOf("Components", module) as any).addWithJSX(
  "CheckboxTypeQuestion",
  wInfo(``)(() => {
    return (
      <div>
        <State store={store}>
          <CheckboxTypeQuestion
            checked={store.checked}
            disabled={false}
            onCheckboxClick={onCheckboxClick}
            questionDescription={questionDescription}
            questionLabel={questionLabel}
          />
        </State>
        <CheckboxTypeQuestion
          checked={false}
          disabled={true}
          onCheckboxClick={onCheckboxClick}
          questionDescription={questionDescription}
          questionLabel={questionLabel}
        />
        <CheckboxTypeQuestion
          checked={true}
          disabled={true}
          onCheckboxClick={onCheckboxClick}
          questionDescription={questionDescription}
          questionLabel={questionLabel}
        />
      </div>
    );
  })
);
