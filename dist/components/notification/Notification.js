import classnames from "classnames";
import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { forPhoneOnlyMediaQuery } from "../utils";
export { ToastContainer } from "react-toastify";
var styles = require("./notification.scss");
// if we need to custom the close button, we have to pass
// a component with a closeToast function, which provided
// by the react-toastify library. so we will miss closeToast
// in the closebutton props check. So use ts-ignore.
// @ts-ignore
var CloseButton = function (_a) {
    var closeToast = _a.closeToast;
    return (React.createElement("div", { onClick: closeToast, className: styles.close },
        React.createElement(Icon, { type: "close", size: "16" })));
};
var getContent = function (header, text, theme) {
    var _a;
    var notificationContentContainerClassname = classnames(styles.notificationContentContainer, styles["" + theme]);
    var iconType = (_a = {},
        _a[NotificationTheme.Success] = "notification-checkmark",
        _a[NotificationTheme.Error] = "notification-error",
        _a[NotificationTheme.Warning] = "warning",
        _a[NotificationTheme.Informational] = "informational",
        _a);
    return (React.createElement("div", { className: notificationContentContainerClassname },
        React.createElement("div", { className: styles.iconContainer },
            React.createElement(Icon, { type: iconType[theme] })),
        React.createElement("div", { className: styles.contentContainer },
            React.createElement("header", { className: styles.title }, header),
            React.createElement("span", { className: styles.description }, text))));
};
export var notification = function (option) {
    var content = getContent(option.header, option.text, option.theme);
    var toastContainerClassname = classnames(styles.toastContainer, styles["" + option.theme]);
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
        // the same reason with above.
        // @ts-ignore
        closeButton: React.createElement(CloseButton, null)
    });
};
//# sourceMappingURL=Notification.js.map