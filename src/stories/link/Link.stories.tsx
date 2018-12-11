import React from "react";

import { Link, LinkTarget } from "@src/components";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const rowStyles = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

(storiesOf("Components", module) as any).addWithJSX(
  "Link",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      Is Disabled
      <div style={rowStyles}>
        <Link
          label="default"
          onClick={action("link-click")}
          link="https://www.google.com"
          target={LinkTarget.Blank}
        />
        <Link
          label="disabled"
          onClick={action("link-click")}
          disabled
          link="https://www.google.com"
        />
      </div>
      Has Icon
      <div style={rowStyles}>
        <Link
          label="arrow"
          icon={"arrowNext"}
          onClick={action("link-click")}
          link="https://www.google.com"
        />
        <Link
          label="arrow"
          icon={"external-link"}
          onClick={action("link-click")}
          link="https://www.google.com"
        />
      </div>
    </div>
  ))
);
