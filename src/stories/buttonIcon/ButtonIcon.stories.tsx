import React from "react";

import { storiesOf } from "@storybook/react";
import { ButtonIcon, Input, InputType, Size } from "../../components";
import { wInfo } from "../utils";

import { action } from "@storybook/addon-actions";

const styles = require("./buttonIcon.stroies.scss");

const rowStyles = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

(storiesOf("Components", module) as any).addWithJSX(
  "ButtonIcon",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      Single ButtonIcon
      <div style={rowStyles}>
        <ButtonIcon type="profile" onClick={action("button-click")} />
        <ButtonIcon
          type="profile"
          disabled={true}
          onClick={action("button-click")}
        />
      </div>
      ButtonIcon With Ohter Component
      <div style={rowStyles}>
        <div className={styles.wrapper}>
          <Input
            onChange={action("value")}
            type={InputType.Number}
            label={"Number"}
            size={Size.Large}
          />
          <ButtonIcon
            type="profile"
            className={styles.buttonIcon}
            onClick={action("button-click")}
          />
        </div>
        <div className={styles.wrapperWithoutLabel}>
          <Input
            onChange={action("value")}
            type={InputType.Number}
            size={Size.Large}
          />
          <ButtonIcon
            type="profile"
            className={styles.buttonIcon}
            onClick={action("button-click")}
          />
        </div>
        <div className={styles.wrapperWithoutLabel}>
          <Input
            onChange={action("value")}
            type={InputType.Number}
            size={Size.Large}
          />
          <ButtonIcon
            type="profile"
            disabled
            className={styles.buttonIcon}
            onClick={action("button-click")}
          />
        </div>
      </div>
    </div>
  ))
);
