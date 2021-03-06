import { select, text } from "@storybook/addon-knobs";
import React from "react";
import { Button, NotificationTheme, Theme } from "../../components";
import { InlineNotificationWithHeader } from "../../components/inlineNotificationWithHeader";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\nLaboriosam natus doloribus aperiam ipsum consectetur, accusamus laborum nam dolor error consequatur beatae quaerat doloremque placeat impedit illo cumque. Provident, eos aperiam.";

const ThemeList: NotificationTheme[] = Object.keys(NotificationTheme).map(
  k => NotificationTheme[k as keyof typeof NotificationTheme]
);

export const _InlineNotificationWithHeader = () => (
  <InlineNotificationWithHeader
    header={text("header", "Normal Header")}
    text={text("text", lorem)}
    theme={select("theme", ThemeList, NotificationTheme.Informational)}
    childNode={<Button theme={Theme.Orange} label="button" />}
    icon="foodshop-filled"
  />
);

export default {
  title: "Notification/InlineNotificationWithHeader",
  component: InlineNotificationWithHeader as any
};
