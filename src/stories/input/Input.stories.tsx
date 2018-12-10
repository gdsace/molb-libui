import React from "react";

import { InputType, Size } from "@src/components/EnumValues";
import { wInfo } from "../utils";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Input } from "@src/components";

const placeholder = "this is placeholder";
const errorMsg = "this is error msg";
const helperMsg = "this is helperMsg";

(storiesOf("Components", module) as any).addWithJSX(
  "Input",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      <h6 style={{ color: "grey" }}>
        Bellow are different size: Large, Medium, Small
      </h6>
      <div style={{ margin: "10px", padding: "10px" }}>
        <Input
          onChange={action("value")}
          placeholder={placeholder}
          type={InputType.Text}
          label={"Large"}
          value=""
          size={Size.Large}
        />
        <br />
        <Input
          onChange={action("value")}
          placeholder={placeholder}
          type={InputType.Text}
          label={"Medium"}
          value=""
          size={Size.Medium}
        />
        <br />
        <Input
          onChange={action("value")}
          placeholder={placeholder}
          type={InputType.Text}
          label={"Small"}
          value=""
          size={Size.Small}
        />
      </div>
      <br />

      <h6 style={{ color: "grey" }}>Bellow are different Type: Number, Text</h6>
      <div style={{ margin: "10px", padding: "10px" }}>
        <Input
          onChange={action("value")}
          type={InputType.Number}
          label={"Number"}
          value=""
          size={Size.Medium}
        />
        <br />
        <Input
          onChange={action("value")}
          placeholder="this is text input"
          type={InputType.Text}
          label={"Text"}
          value=""
          size={Size.Medium}
        />
      </div>
      <br />

      <h6 style={{ color: "grey" }}>
        Bellow are different looks: Normal, Error, Disable, WithHelper,
        WithToolTip, WithSuffix
      </h6>
      <div style={{ margin: "10px", padding: "10px" }}>
        <Input
          onChange={action("value")}
          type={InputType.Text}
          placeholder={placeholder}
          label={"Normal"}
          value=""
          size={Size.Medium}
        />
        <br />
        <Input
          onChange={action("value")}
          type={InputType.Text}
          label={"Disable"}
          size={Size.Medium}
          value=""
          disabled={true}
        />
        <br />
        <Input
          onChange={action("value")}
          placeholder="this is text input"
          type={InputType.Text}
          label={"Error"}
          size={Size.Medium}
          showError={true}
          value=""
          errorMsg={errorMsg}
        />
        <br />
        <br />
        <Input
          onChange={action("value")}
          placeholder="this is text input with helper text"
          type={InputType.Text}
          label={"Helper"}
          size={Size.Medium}
          showHelper={true}
          value=""
          helperMsg={helperMsg}
        />
        <br />
        <Input
          onChange={action("value")}
          placeholder="this is text input with toolTip"
          type={InputType.Text}
          label={"Tooltip"}
          size={Size.Medium}
          value=""
          showTooltip={true}
        />
        <br />
        <Input
          onChange={action("value")}
          type={InputType.Text}
          label={"Suffix"}
          size={Size.Medium}
          value=""
          suffix={"suffix"}
        />
      </div>
      <br />

      <h6 style={{ color: "grey" }}>Bellow are some length limit for input</h6>
      <div style={{ margin: "10px", padding: "10px" }}>
        <Input
          onChange={action("value")}
          type={InputType.Text}
          placeholder={placeholder}
          label={"Text MaxLength=10"}
          size={Size.Medium}
          value=""
          maxLength={10}
        />
        <br />
        <Input
          onChange={action("value")}
          type={InputType.Number}
          label={"Number MaxLength=10"}
          size={Size.Medium}
          value=""
          maxLength={10}
        />
      </div>
      <br />
    </div>
  ))
);
