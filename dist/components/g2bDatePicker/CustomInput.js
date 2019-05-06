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
import classnames from "classnames";
import * as _ from "lodash";
import React from "react";
import { Icon } from "../icons";
var styles = require("./g2bDatePicker.scss");
var CustomInput = /** @class */ (function (_super) {
    __extends(CustomInput, _super);
    function CustomInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomInput.prototype.render = function () {
        var customInputClassName = this.props.selected
            ? classnames(styles.customInput, styles.selected)
            : classnames(styles.customInput);
        var errorClassName = this.props.showError
            ? classnames(styles.errorInput)
            : "";
        var textColorClassName = this.props.value
            ? ""
            : classnames(styles.placeholderColor);
        return (React.createElement("div", { className: classnames(customInputClassName, errorClassName, textColorClassName), onClick: this.props.onClick },
            !_.isEmpty(this.props.value)
                ? this.props.value
                : this.props.placeholder,
            React.createElement(Icon, { className: styles.calendarIcon, size: "16", type: "calendar" })));
    };
    return CustomInput;
}(React.Component));
export { CustomInput };
//# sourceMappingURL=CustomInput.js.map