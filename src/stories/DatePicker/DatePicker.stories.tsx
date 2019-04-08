import React from "react";

import { storiesOf } from "@storybook/react";
import { G2BDatePicker } from "../../components/datePicker/G2BDatePicker";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.SelectionControls, module) as any).addWithJSX(
  "G2BDatePicker",
  wInfo(``)(() => {
    return (
      <div>
        <G2BDatePicker onChange={() => ({})} />
      </div>
    );
  })
);
