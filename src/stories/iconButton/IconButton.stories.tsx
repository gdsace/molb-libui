import React from "react";

import { IconButton, Input, InputType, Size } from "../../components";

import { action } from "@storybook/addon-actions";

const styles = require("./IconButton.stories.scss");

const rowStyles = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

export const _IconButton = () => (
  <div style={{ padding: "10px" }}>
    Single iconButton
    <div style={rowStyles}>
      <IconButton type="profile" onClick={action("button-click")} />
      <IconButton type="profile" disabled={true} onClick={action("button-click")} />
    </div>
    iconButton With Ohter Component
    <div style={rowStyles}>
      <div className={styles.wrapper}>
        <Input onChange={action("value")} type={InputType.Number} label={"Number"} size={Size.Large} />
        <IconButton type="profile" className={styles.iconButton} onClick={action("button-click")} />
      </div>
      <div className={styles.wrapperWithoutLabel}>
        <Input onChange={action("value")} type={InputType.Number} size={Size.Large} />
        <IconButton type="profile" className={styles.iconButton} onClick={action("button-click")} />
      </div>
      <div className={styles.wrapperWithoutLabel}>
        <Input onChange={action("value")} type={InputType.Number} size={Size.Large} />
        <IconButton type="profile" disabled className={styles.iconButton} onClick={action("button-click")} />
      </div>
    </div>
  </div>
);

export default {
  title: "Buttons/IconButton",
  component: IconButton
};
