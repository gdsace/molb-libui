import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../../components";
import { AppAlert } from "../../components/appAlert";
import { CategoryName } from "../utils";

const AppAlertAlignmentThemeList: AppAlertAlignmentTheme[] = Object.keys(
  AppAlertAlignmentTheme
).map(k => AppAlertAlignmentTheme[k as keyof typeof AppAlertAlignmentTheme]);

const AppAlertThemeList: AppAlertTheme[] = Object.keys(AppAlertTheme).map(
  k => AppAlertTheme[k as keyof typeof AppAlertTheme]
);

(storiesOf(CategoryName.Notification, module) as any).addWithJSX(
  "App-level Alert",
  () => (
    <AppAlert
      text={text("text", "Notification with a bold text.")}
      textToBold={text("textToBold", "bold")}
      theme={select("theme", AppAlertThemeList, AppAlertTheme.Informational)}
      alignment={select(
        "alignment",
        AppAlertAlignmentThemeList,
        AppAlertAlignmentTheme.LEFT
      )}
      showIcon={boolean("showIcon", true)}
    />
  )
);
