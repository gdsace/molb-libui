import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { InlineNotification, NotificationTheme } from "../../components";
import { CategoryName } from "../utils";

const ThemeList: NotificationTheme[] = Object.keys(NotificationTheme).map(
  k => NotificationTheme[k as keyof typeof NotificationTheme]
);

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\nLaboriosam natus doloribus aperiam ipsum consectetur, accusamus laborum nam dolor error consequatur beatae quaerat doloremque placeat impedit illo cumque. Provident, eos aperiam.";

(storiesOf(CategoryName.Notification, module) as any).addWithJSX(
  "InlineNotification",
  () => (
    <InlineNotification
      text={text("text", lorem)}
      theme={select("theme", ThemeList, NotificationTheme.Informational)}
    />
  )
);
