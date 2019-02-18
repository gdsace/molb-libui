import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { CheckboxTypeQuestion } from "../../components";
import { CategoryName, wInfo } from "../utils";

const store = new Store({
  checked: false
});

const onCheckboxClick = (value: string) => {
  store.set({ checked: value });
};

const questionLabel = "Question label";
const questionDescription = "This is question description";

(storiesOf(CategoryName.SelectionControls, module) as any).addWithJSX(
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
            tooltip={"this is tool tip for different questions"}
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
