import classNames from "classnames";
import * as React from "react";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
var style = require("./InlineNotificationWithHeader.scss");
export var InlineNotificationWithHeader = function (props) {
    var _a, _b, _c;
    var theme = props.theme, text = props.text;
    var headerStyle = classNames(style.inlineNotificationHeader, style["" + theme], (_a = {},
        _a[addLocatedErrorClassname("")] = theme === NotificationTheme.Error,
        _a));
    var iconType = (_b = {},
        _b[NotificationTheme.Success] = "notification-checkmark",
        _b[NotificationTheme.Error] = "notification-error",
        _b[NotificationTheme.Warning] = "warning",
        _b[NotificationTheme.Informational] = "informational",
        _b);
    var inlineNotificationClassName = classNames(style.inlineNotification, style["" + theme], (_c = {},
        _c[addLocatedErrorClassname("")] = theme === NotificationTheme.Error,
        _c));
    return (React.createElement("div", { className: inlineNotificationClassName, "data-scrollpoint": true },
        React.createElement("div", { className: style.inlineNotificationIcon },
            React.createElement(Icon, { type: iconType[theme], size: "24" })),
        React.createElement("div", { className: style.content },
            React.createElement("h5", { className: headerStyle }, props.header),
            React.createElement("p", { className: style.inlineNotificationText }, text))));
};
//# sourceMappingURL=InlineNotificationWithHeader.js.map