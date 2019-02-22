import React from "react";

import { storiesOf } from "@storybook/react";
import { Listcard, ListcardStatus } from "../../components";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.Cards, module) as any).addWithJSX(
  "Listcard",
  wInfo(`default`)(() => (
    <div style={{ margin: "20px" }}>
      <Listcard buttonText="Action Button" status={ListcardStatus.Normal} />
      <Listcard
        buttonText="Action Button"
        tag={"Expires on 8 Oct 2018"}
        status={ListcardStatus.Expries}
      />
    </div>
  ))
);
