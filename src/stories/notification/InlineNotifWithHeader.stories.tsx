import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Button, NotificationTheme, Theme } from "../../components";
import { InlineNotificationWithHeader } from "../../components/inlineNotificationWithHeader";
import { CategoryName } from "../utils";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\nLaboriosam natus doloribus aperiam ipsum consectetur, accusamus laborum nam dolor error consequatur beatae quaerat doloremque placeat impedit illo cumque. Provident, eos aperiam.";

const ThemeList: NotificationTheme[] = Object.keys(NotificationTheme).map(
  k => NotificationTheme[k as keyof typeof NotificationTheme]
);

(storiesOf(CategoryName.Notification, module) as any).addWithJSX("InlineNotificationWithHeader", () => (
  <InlineNotificationWithHeader
    header={text("header", "Normal Header")}
    text={text("text", lorem)}
    theme={select("theme", ThemeList, NotificationTheme.Informational)}
    childNode={<Button theme={Theme.Orange} label="button" />}
    icon="foodshop-filled"
  />
));
