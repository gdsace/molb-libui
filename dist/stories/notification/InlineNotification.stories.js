import React from "react";
import { storiesOf } from "@storybook/react";
import { InlineNotification, NotificationTheme } from "../../components";
import { CategoryName, wInfo } from "../utils";
storiesOf(CategoryName.Notification, module).addWithJSX("InlineNotification", wInfo("")(function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "InlineNotification"),
        React.createElement("div", { style: { padding: "10px" } },
            React.createElement(InlineNotification, { text: "Normal Notification", theme: NotificationTheme.Informational }),
            React.createElement(InlineNotification, { text: "Success Notification", theme: NotificationTheme.Success }),
            React.createElement(InlineNotification, { text: "Warning Notification", theme: NotificationTheme.Warning }),
            React.createElement(InlineNotification, { text: "Error Notification", theme: NotificationTheme.Error }))));
}));
//# sourceMappingURL=InlineNotification.stories.js.map