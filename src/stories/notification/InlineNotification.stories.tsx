import { select, text } from "@storybook/addon-knobs";
import React from "react";
import { InlineNotification, NotificationTheme } from "../../components";

const ThemeList: NotificationTheme[] = Object.keys(NotificationTheme).map(
  k => NotificationTheme[k as keyof typeof NotificationTheme]
);

const lorem =
  "Multiple lines: Use \\n to linebreak.\nLorem, ipsum dolor sit amet consectetur adipisicing elit.\nLaboriosam natus doloribus aperiam ipsum consectetur, accusamus laborum nam dolor error consequatur beatae quaerat doloremque placeat impedit illo cumque. Provident, eos aperiam.\nLorem, ipsum dolor sit amet consectetur adipisicing elit.";

const single =
  "Single line: You can see this seems slightly off-center, feel free to improve this if you have any elegant solutions";

export const _InlineNotification = () => (
  <>
    <InlineNotification
      text={text("text", lorem)}
      theme={select("theme", ThemeList, NotificationTheme.Informational)}
    />
    <br />
    <InlineNotification
      text={text("text", single)}
      theme={select("theme", ThemeList, NotificationTheme.Informational)}
    />
  </>
);

export default {
  title: "Notification/InlineNotification",
  component: InlineNotification
};
