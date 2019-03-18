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
import * as React from "react";
var styles = require("./checkbox.scss");
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onCheckboxClick = function (event) {
            _this.props.onCheckboxClick(event.target.checked);
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, checked = _a.checked, disabled = _a.disabled;
        return (React.createElement("div", { className: styles.checkboxWrapper, "data-scrollpoint": true },
            React.createElement("span", { className: styles.checkbox },
                React.createElement("input", { type: "checkbox", checked: checked, disabled: disabled, className: styles.checkboxInput, onChange: this.onCheckboxClick }),
                React.createElement("span", { className: styles.inner }))));
    };
    Checkbox.defaultProps = {
        checked: false,
        disabled: false
    };
    return Checkbox;
}(React.Component));
export { Checkbox };
//# sourceMappingURL=Checkbox.js.map