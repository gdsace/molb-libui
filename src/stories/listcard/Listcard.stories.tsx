import React from "react";

import { ListcardStatus } from "@src/components/EnumValues";
import { wInfo } from "../utils";
import { storiesOf } from "@storybook/react";
import { Listcard } from "@src/components";

(storiesOf("Components", module) as any).addWithJSX(
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
