import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { CheckboxTypeQuestion } from "../../components";

const store = new Store({
  checked: false
});

const onCheckboxClick = (value: string) => {
  store.set({ checked: value });
};

const questionLabel = "Question label";
const questionDescription = "This is question description";

export const _CheckboxTypeQuestion = () => (
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

    <CheckboxTypeQuestion
      checked={false}
      disabled={true}
      onCheckboxClick={onCheckboxClick}
      questionDescription={questionDescription}
      questionLabel={questionLabel}
      errorMsg={"This is an error message."}
    />

    <div>Below is a hidden checkboxTypeQuestion.</div>
    <CheckboxTypeQuestion
      checked={true}
      disabled={true}
      onCheckboxClick={onCheckboxClick}
      questionDescription={questionDescription}
      questionLabel={questionLabel}
      hidden={true}
    />
  </div>
);

_CheckboxTypeQuestion.story = {
  name: "CheckboxTypeQuestion"
};

export default {
  title: "CheckboxTypeQuestion",
  component: CheckboxTypeQuestion
};
