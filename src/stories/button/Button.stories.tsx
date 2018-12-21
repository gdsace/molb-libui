import React from "react";

import { Button } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

import { Size, Theme } from "@src/components/EnumValues";
import { action } from "@storybook/addon-actions";

const rowStyles = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

(storiesOf("Components", module) as any).addWithJSX(
  "Button",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      Is Disabled
      <div style={rowStyles}>
        <Button label="default" onClick={action("button-click")} />
        <Button label="disabled" onClick={action("button-click")} disabled />
      </div>
      Different Size
      <div style={rowStyles}>
        <Button
          label="small"
          onClick={action("button-click")}
          size={Size.Small}
        />
        <Button
          label="medium"
          onClick={action("button-click")}
          size={Size.Medium}
        />
        <Button
          label="large"
          onClick={action("button-click")}
          size={Size.Large}
        />
      </div>
      Different Theme
      <div style={rowStyles}>
        <Button
          label="ghost"
          onClick={action("button-click")}
          theme={Theme.Ghost}
        />
        <Button
          label="simple"
          onClick={action("button-click")}
          theme={Theme.Simple}
        />
        <Button
          label="primary"
          onClick={action("button-click")}
          theme={Theme.Primary}
        />
        <Button
          label="secondary"
          onClick={action("button-click")}
          theme={Theme.Secondary}
        />
        <Button
          label="secondary"
          onClick={action("button-click")}
          theme={Theme.Secondary}
          loading={true}
        />
      </div>
    </div>
  ))
);
