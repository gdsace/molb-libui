import React from "react";
import { storiesOf } from "@storybook/react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../../components";
import { AppAlert } from "../../components/appAlert";
import { CategoryName, wInfo } from "../utils";
storiesOf(CategoryName.AppAlert, module).addWithJSX("AppAlert", wInfo("")(function () {
    return (React.createElement("div", null,
        React.createElement("h3", null, "App-level Alert content alignment left"),
        React.createElement("div", { style: { padding: "10px" } },
            React.createElement(AppAlert, { text: "Normal Notification", theme: AppAlertTheme.Informational }),
            React.createElement(AppAlert, { text: "Warning Notification", theme: AppAlertTheme.Warning }),
            React.createElement(AppAlert, { text: "Error Notification", theme: AppAlertTheme.Error })),
        React.createElement("h3", null, "App-level Alert content alignment center"),
        React.createElement("div", { style: { padding: "10px" } },
            React.createElement(AppAlert, { text: "Normal Notification", theme: AppAlertTheme.Informational, alignment: AppAlertAlignmentTheme.CENTER }),
            React.createElement(AppAlert, { text: "Warning Notification", theme: AppAlertTheme.Warning, alignment: AppAlertAlignmentTheme.CENTER }),
            React.createElement(AppAlert, { text: "Error Notification", theme: AppAlertTheme.Error, alignment: AppAlertAlignmentTheme.CENTER }))));
}));
//# sourceMappingURL=AppAlert.stories.js.map