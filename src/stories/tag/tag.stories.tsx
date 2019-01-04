import React from "react";

import { storiesOf } from "@storybook/react";
import { Tag } from "../../components";
import { TagTheme } from "../../components/EnumValues";
import { wInfo } from "../utils";

const rowStyles = {
  padding: "20px 0",
  marginRight: "10px"
};

(storiesOf("Components", module) as any).addWithJSX(
  "Tag",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      Tag Themes
      <br />
      <div style={rowStyles}>
        <Tag theme={TagTheme.Blue} label={"blue theme"} />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Green} label={"green theme"} />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Orange} label={"orange theme"} />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Red} label={"red theme"} />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Purple} label={"purple theme"} />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Grey} label={"grey theme"} />
      </div>
    </div>
  ))
);
