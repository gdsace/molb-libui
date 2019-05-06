import React from "react";
import { storiesOf } from "@storybook/react";
import { NotificationTheme } from "../../components";
import { InlineNotificationWithHeader } from "../../components/inlineNotificationWithHeader";
import { CategoryName, wInfo } from "../utils";
var lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus doloribus aperiam ipsum consectetur, accusamus laborum nam dolor error consequatur beatae quaerat doloremque placeat impedit illo cumque. Provident, eos aperiam.";
storiesOf(CategoryName.Notification, module).addWithJSX("InlineNotificationWithHeader", wInfo("")(function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "InlineNotificationWithHeader"),
        React.createElement("p", null,
            "Essentially the same component as ",
            React.createElement("code", null, "InlineNotification"),
            ", but with an extra header"),
        React.createElement("br", null),
        React.createElement("h5", null, "Informational Type"),
        React.createElement("div", { style: { padding: "10px" } },
            React.createElement(InlineNotificationWithHeader, { header: "Normal Header", text: "Very infomational thanks", theme: NotificationTheme.Informational }),
            React.createElement(InlineNotificationWithHeader, { header: "Normal Header", text: lorem, theme: NotificationTheme.Informational }),
            React.createElement(InlineNotificationWithHeader, { header: "Normal Header", text: lorem + lorem, theme: NotificationTheme.Informational }),
            React.createElement("br", null),
            React.createElement("h5", null, "Success Type"),
            React.createElement(InlineNotificationWithHeader, { header: "Success Header", text: "Bleh", theme: NotificationTheme.Success }),
            React.createElement("br", null),
            React.createElement("h5", null, "Warning Type"),
            React.createElement(InlineNotificationWithHeader, { header: "Warning Header", text: "Bleh", theme: NotificationTheme.Warning }),
            React.createElement("br", null),
            React.createElement("h5", null, "Error Type"),
            React.createElement(InlineNotificationWithHeader, { header: "Error Header", text: "Bleh", theme: NotificationTheme.Error }))));
}));
//# sourceMappingURL=InlineNotifWithHeader.stories.js.map