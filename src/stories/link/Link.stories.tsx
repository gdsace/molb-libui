import React from "react";

import { action } from "@storybook/addon-actions";
import { Link, LinkTarget } from "../../components";

const rowStyles = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

export const _Link = () => (
  <div style={{ padding: "10px" }}>
    Is Disabled
    <div style={rowStyles}>
      <Link label="default" onClick={action("link-click")} link="https://www.google.com" target={LinkTarget.Blank} />
      <Link label="disabled" onClick={action("link-click")} disabled link="https://www.google.com" />
    </div>
    Has Icon
    <div style={rowStyles}>
      <Link label="arrow" icon={"arrowNext"} onClick={action("link-click")} link="https://www.google.com" />
      <Link label="arrow" icon={"external-link"} onClick={action("link-click")} link="https://www.google.com" />
    </div>
    Is Inline
    <div style={rowStyles}>
      <Link label="Inline enabled" inline={true} />
      <Link label="Inline disabled" inline={true} disabled={true} />
    </div>
  </div>
);

export default {
  title: "Link",
  component: Link
};
