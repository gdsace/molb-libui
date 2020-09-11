import classNames from "classnames";
import * as React from "react";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
var style = require("./inlineNotification.scss");
export var InlineNotification = function (props) {
    var _a, _b;
    var theme = props.theme, text = props.text;
    var iconType = (_a = {},
        _a[NotificationTheme.Success] = "notification-checkmark",
        _a[NotificationTheme.Error] = "notification-error",
        _a[NotificationTheme.Warning] = "warning",
        _a[NotificationTheme.SeriousWarning] = "warning",
        _a[NotificationTheme.Informational] = "informational",
        _a);
    var inlineNotificationClassName = classNames(style.inlineNotification, style["" + theme], (_b = {},
        _b[addLocatedErrorClassname("")] = theme === NotificationTheme.Error,
        _b));
    var processedText = text.split("\n").map(function (str, index) { return (React.createElement(React.Fragment, { key: "inline-notif-text-chunk-" + index },
        str,
        React.createElement("br", null))); });
    return (React.createElement("div", { className: inlineNotificationClassName, "data-scrollpoint": true },
        React.createElement("div", { className: style.inlineNotificationIcon },
            React.createElement(Icon, { type: iconType[theme], size: "20" })),
        React.createElement("p", { className: style.inlineNotificationText }, processedText)));
};
//# sourceMappingURL=InlineNotification.js.map