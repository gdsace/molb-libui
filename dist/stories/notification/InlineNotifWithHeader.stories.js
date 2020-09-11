import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Button, NotificationTheme, Theme } from "../../components";
import { InlineNotificationWithHeader } from "../../components/inlineNotificationWithHeader";
import { CategoryName } from "../utils";
var lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\nLaboriosam natus doloribus aperiam ipsum consectetur, accusamus laborum nam dolor error consequatur beatae quaerat doloremque placeat impedit illo cumque. Provident, eos aperiam.";
var ThemeList = Object.keys(NotificationTheme).map(function (k) { return NotificationTheme[k]; });
storiesOf(CategoryName.Notification, module).addWithJSX("InlineNotificationWithHeader", function () { return (React.createElement(InlineNotificationWithHeader, { header: text("header", "Normal Header"), text: text("text", lorem), theme: select("theme", ThemeList, NotificationTheme.Informational), childNode: React.createElement(Button, { theme: Theme.Orange, label: "button" }), icon: "foodshop-filled" })); });
//# sourceMappingURL=InlineNotifWithHeader.stories.js.map