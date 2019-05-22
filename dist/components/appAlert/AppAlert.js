var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import classNames from "classnames";
import * as React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
var style = require("./appAlert.scss");
var AppAlert = /** @class */ (function (_super) {
    __extends(AppAlert, _super);
    function AppAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAlert.prototype.render = function () {
        var _a, _b;
        var _c = this.props, theme = _c.theme, text = _c.text, alignment = _c.alignment;
        var iconType = (_a = {},
            _a[AppAlertTheme.Error] = "notification-error",
            _a[AppAlertTheme.Warning] = "alert",
            _a[AppAlertTheme.Informational] = "informational",
            _a);
        var appAlertClassName = classNames(style.appAlert, style["" + theme], style["" + alignment], (_b = {},
            _b[addLocatedErrorClassname("")] = theme === AppAlertTheme.Error,
            _b));
        return (React.createElement("div", { className: appAlertClassName },
            React.createElement(Icon, { className: style.appAlertIcon, type: iconType[theme], size: "14" }),
            React.createElement("span", { className: style.appAlertText }, text)));
    };
    AppAlert.defaultProps = {
        alignment: AppAlertAlignmentTheme.LEFT
    };
    return AppAlert;
}(React.Component));
export { AppAlert };
//# sourceMappingURL=AppAlert.js.map