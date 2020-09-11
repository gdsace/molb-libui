import classnames from "classnames";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { forPhoneOnlyMediaQuery } from "../utils";
import styles from "./notification.scss";
var CloseButton = function (props) { return (React.createElement("div", { onClick: props.closeToast, className: styles.close },
    React.createElement(Icon, { type: "close", size: "16" }))); };
var notificationContent = function (props) {
    var _a;
    var header = props.header, text = props.text, theme = props.theme;
    var notificationContentContainerClassname = classnames(styles.notificationContentContainer, styles["" + theme]);
    var iconType = (_a = {},
        _a[NotificationTheme.Success] = "notification-checkmark",
        _a[NotificationTheme.Error] = "notification-error",
        _a[NotificationTheme.Warning] = "warning",
        _a[NotificationTheme.SeriousWarning] = "warning",
        _a[NotificationTheme.Informational] = "informational",
        _a);
    return (React.createElement("div", { className: notificationContentContainerClassname },
        React.createElement("div", { className: styles.iconContainer },
            React.createElement(Icon, { type: iconType[theme] })),
        React.createElement("div", { className: styles.contentContainer },
            React.createElement("header", { className: styles.title }, header),
            React.createElement("span", { className: styles.description }, text))));
};
export var notification = function (options) {
    var content = notificationContent(options);
    var toastContainerClassname = classnames(styles.toastContainer, styles["" + options.theme]);
    var responsiveForMobile = forPhoneOnlyMediaQuery();
    var position = responsiveForMobile ? "top-center" : "top-right";
    toast(content, {
        hideProgressBar: true,
        closeOnClick: false,
        position: position,
        pauseOnHover: true,
        draggable: true,
        autoClose: 5000,
        className: toastContainerClassname,
        closeButton: React.createElement(CloseButton, null)
    });
};
//# sourceMappingURL=Notification.js.map