import { boolean, select, text } from "@storybook/addon-knobs";
import React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../../components";
import { AppAlert } from "../../components/appAlert";

const AppAlertAlignmentThemeList: AppAlertAlignmentTheme[] = Object.keys(AppAlertAlignmentTheme).map(
  k => AppAlertAlignmentTheme[k as keyof typeof AppAlertAlignmentTheme]
);

const AppAlertThemeList: AppAlertTheme[] = Object.keys(AppAlertTheme).map(
  k => AppAlertTheme[k as keyof typeof AppAlertTheme]
);

export const AppLevelAlert = () => (
  <AppAlert
    text={text("text", "Notification with a bold text.")}
    textToBold={text("textToBold", "bold")}
    theme={select("theme", AppAlertThemeList, AppAlertTheme.Informational)}
    alignment={select("alignment", AppAlertAlignmentThemeList, AppAlertAlignmentTheme.LEFT)}
    showIcon={boolean("showIcon", true)}
  />
);

export default {
  title: "Notification/AppAlert",
  component: AppAlert
};
