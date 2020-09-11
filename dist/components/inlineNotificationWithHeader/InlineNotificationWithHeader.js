import classNames from "classnames";
import * as React from "react";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import styles from "./InlineNotificationWithHeader.scss";
export var InlineNotificationWithHeader = function (props) {
    var _a, _b, _c;
    var theme = props.theme, text = props.text, childNode = props.childNode;
    var headerStyle = classNames(styles.inlineNotificationHeader, styles["" + theme], (_a = {},
        _a[addLocatedErrorClassname("")] = theme === NotificationTheme.Error,
        _a));
    var getIcon = function (defaultIcon) { return props.icon || defaultIcon; };
    var iconType = (_b = {},
        _b[NotificationTheme.Success] = getIcon("notification-checkmark"),
        _b[NotificationTheme.Error] = getIcon("notification-error"),
        _b[NotificationTheme.Warning] = getIcon("warning"),
        _b[NotificationTheme.SeriousWarning] = getIcon("warning"),
        _b[NotificationTheme.Informational] = getIcon("informational"),
        _b);
    var inlineNotificationClassName = classNames(styles.inlineNotification, styles["" + theme], (_c = {},
        _c[addLocatedErrorClassname("")] = theme === NotificationTheme.Error,
        _c));
    var processedText = text.split("\n").map(function (str, index) { return (React.createElement(React.Fragment, { key: "inline-notif-with-header-text-chunk-" + index },
        str,
        React.createElement("br", null))); });
    return (React.createElement("div", { className: inlineNotificationClassName, "data-scrollpoint": true },
        React.createElement("div", { className: styles.inlineNotificationTextPart },
            React.createElement("div", { className: styles.inlineNotificationIcon },
                React.createElement(Icon, { type: iconType[theme], size: "24" })),
            React.createElement("div", { className: styles.content },
                React.createElement("h5", { className: headerStyle }, props.header),
                React.createElement("p", { className: styles.inlineNotificationText }, processedText))),
        childNode && childNode));
};
//# sourceMappingURL=InlineNotificationWithHeader.js.map