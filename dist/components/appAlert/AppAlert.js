import classNames from "classnames";
import React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import style from "./appAlert.scss";
export var AppAlert = function (props) {
    var _a, _b;
    var theme = props.theme, text = props.text, textToBold = props.textToBold, alignment = props.alignment, showIcon = props.showIcon;
    var iconType = (_a = {},
        _a[AppAlertTheme.Error] = "notification-error",
        _a[AppAlertTheme.Warning] = "alert",
        _a[AppAlertTheme.Informational] = "informational",
        _a);
    var appAlertClassName = classNames(style.appAlert, style["" + alignment], (_b = {},
        _b[addLocatedErrorClassname("")] = theme === AppAlertTheme.Error,
        _b));
    var renderText = function () {
        if (textToBold) {
            return (React.createElement("div", { className: style.appAlertText }, text.split("\n").map(function (textvalue, index) { return (React.createElement(React.Fragment, { key: textvalue + "-" + index },
                textvalue
                    .split(new RegExp("(" + textToBold + ")", "gi"))
                    .map(function (part, i) {
                    return part.toLowerCase() === textToBold.toLowerCase() ? (React.createElement("span", { className: style.appAlertTextBold, key: i }, part)) : (part);
                }),
                React.createElement("br", null))); })));
        }
        return (React.createElement("div", { className: style.appAlertText }, text.split("\n").map(function (textvalue, index) { return (React.createElement(React.Fragment, { key: textvalue + "-" + index },
            textvalue,
            React.createElement("br", null))); })));
    };
    return (React.createElement("div", { className: style["" + theme] },
        React.createElement("div", { className: appAlertClassName },
            showIcon && (React.createElement(Icon, { className: style.appAlertIcon, type: iconType[theme], size: "24" })),
            renderText())));
};
AppAlert.defaultProps = {
    alignment: AppAlertAlignmentTheme.LEFT,
    showIcon: true
};
//# sourceMappingURL=AppAlert.js.map