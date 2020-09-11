import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../../components";
import { AppAlert } from "../../components/appAlert";
import { CategoryName } from "../utils";
var AppAlertAlignmentThemeList = Object.keys(AppAlertAlignmentTheme).map(function (k) { return AppAlertAlignmentTheme[k]; });
var AppAlertThemeList = Object.keys(AppAlertTheme).map(function (k) { return AppAlertTheme[k]; });
storiesOf(CategoryName.Notification, module).addWithJSX("App-level Alert", function () { return (React.createElement(AppAlert, { text: text("text", "Notification with a bold text."), textToBold: text("textToBold", "bold"), theme: select("theme", AppAlertThemeList, AppAlertTheme.Informational), alignment: select("alignment", AppAlertAlignmentThemeList, AppAlertAlignmentTheme.LEFT), showIcon: boolean("showIcon", true) })); });
//# sourceMappingURL=AppLevelNotification.stories.js.map