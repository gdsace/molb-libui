var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Button, NotificationTheme } from "../../components";
import { notification, ToastContainer } from "../../components/notification";
import { CategoryName } from "../utils";
storiesOf(CategoryName.Notification, module).addWithJSX("Notification", function () {
    var option = {
        header: text("header", "Notification header"),
        text: text("text", "Notification text")
    };
    var successOption = __assign({}, option, { theme: NotificationTheme.Success });
    var errorOption = __assign({}, option, { theme: NotificationTheme.Error });
    var infomationalOption = __assign({}, option, { theme: NotificationTheme.Informational });
    var warningOption = __assign({}, option, { theme: NotificationTheme.Warning });
    return (React.createElement("div", null,
        React.createElement("h1", null, "Notification"),
        React.createElement("div", { style: {
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                height: "200px",
                justifyContent: "space-around"
            } },
            React.createElement(Button, { label: "success", onClick: function () { return notification(successOption); } }),
            React.createElement(Button, { label: "error", onClick: function () { return notification(errorOption); } }),
            React.createElement(Button, { label: "infomational", onClick: function () { return notification(infomationalOption); } }),
            React.createElement(Button, { label: "warning", onClick: function () { return notification(warningOption); } }),
            React.createElement(ToastContainer, { newestOnTop: true }))));
});
//# sourceMappingURL=Notification.stories.js.map