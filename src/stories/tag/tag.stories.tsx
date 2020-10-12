import React from "react";

import { storiesOf } from "@storybook/react";
import { Tag, TagSize } from "../../components";
import { TagTheme } from "../../components/EnumValues";
import { CategoryName, wInfo } from "../utils";

const rowStyles = {
  padding: "20px 0",
  marginRight: "10px"
};
storiesOf(CategoryName.Tags, module).add(
  "Tag",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      Tag Themes
      <br />
      <div style={rowStyles}>
        <Tag theme={TagTheme.Blue} label="blue theme" showTooltip tooltipContent="this is the blue theme" />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Green} label="green theme" showTooltip tooltipContent="this is the green theme" />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Orange} label="orange theme" showTooltip tooltipContent="this is the orange theme" />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Red} label="red theme" showTooltip tooltipContent="this is the red theme" />
      </div>
      <div style={rowStyles}>
        <Tag theme={TagTheme.Purple} label="purple theme" showTooltip tooltipContent="this is the purple theme" />
      </div>
      <div style={rowStyles}>
        <Tag tagSize={TagSize.Large} label="grey theme" showTooltip tooltipContent="this is the grey theme" />
      </div>
      <div style={rowStyles}>
        <Tag tagSize={TagSize.Large} label="there is a helperMsg" helperMsg="this is helperMsg" />
      </div>
    </div>
  ))
);
