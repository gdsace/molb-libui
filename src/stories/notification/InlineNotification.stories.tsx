import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { InlineNotification, NotificationTheme } from "../../components";
import { CategoryName } from "../utils";

const ThemeList: NotificationTheme[] = Object.keys(NotificationTheme).map(
  k => NotificationTheme[k as keyof typeof NotificationTheme]
);

(storiesOf(CategoryName.Notification, module) as any).addWithJSX(
  "InlineNotification",
  () => (
    <InlineNotification
      text={text("text", "Normal Notification")}
      theme={select("theme", ThemeList, NotificationTheme.Informational)}
    />
  )
);
