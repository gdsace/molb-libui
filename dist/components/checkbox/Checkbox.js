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
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.onCheckboxClick = function (event) {
            _this.onCheckedValueChange(event.target.checked);
        };
        _this.onClickableElementClick = function () {
            if (_this.props.disabled) {
                return;
            }
            _this.onCheckedValueChange(!_this.state.checked);
        };
        _this.state = { checked: props.checked };
        return _this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, checked = _a.checked, disabled = _a.disabled;
        return (React.createElement("div", { className: styles.checkboxWrapper, "data-scrollpoint": true },
            React.createElement("span", { className: styles.checkbox },
                React.createElement("input", { type: "checkbox", checked: checked, disabled: disabled, className: styles.checkboxInput, onChange: this.onCheckboxClick }),
                React.createElement("span", { className: styles.inner })),
            this.props.clickableElement && (React.createElement("span", { className: styles.clickableElement, onClick: this.onClickableElementClick }, this.props.clickableElement))));
    };
    Checkbox.prototype.onCheckedValueChange = function (newValue) {
        this.setState({ checked: newValue });
        this.props.onCheckboxClick(newValue);
    };
    Checkbox.defaultProps = {
        checked: false,
        disabled: false
    };
    Checkbox.getDerivedStateFromProps = function (props, state) { return (state.checked === props.checked ? null : { checked: props.checked }); };
    return Checkbox;
}(React.Component));
export { Checkbox };
//# sourceMappingURL=Checkbox.js.map