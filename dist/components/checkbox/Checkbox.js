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
import { CheckboxTheme } from "../EnumValues";
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
        var _a = this.props, checked = _a.checked, disabled = _a.disabled, theme = _a.theme, minusSign = _a.minusSign;
        var checkboxInnerClass = classNames(minusSign ? styles.innerMinus : styles.innerDefault, styles.inner, styles["" + theme]);
        var checkboxInputClass = classNames(styles.checkboxInput, styles[theme + "CheckBox"]);
        return (React.createElement("div", null,
            React.createElement("div", { className: styles.checkboxWrapper, "data-scrollpoint": true },
                React.createElement("span", { className: styles.checkbox },
                    React.createElement("input", { name: this.props.fieldName, type: "checkbox", checked: checked, disabled: disabled, className: checkboxInputClass, onChange: this.onCheckboxClick, onClick: function (event) { return event.stopPropagation(); } }),
                    React.createElement("span", { className: checkboxInnerClass })),
                this.props.clickableElement && (React.createElement("span", { className: styles.clickableElement, onClick: this.onClickableElementClick }, this.props.clickableElement))),
            this.props.addonBelow && (React.createElement("div", { className: styles.addonBelow }, this.props.addonBelow))));
    };
    Checkbox.prototype.onCheckedValueChange = function (newValue) {
        this.setState({ checked: newValue });
        this.props.onCheckboxClick(newValue);
    };
    Checkbox.defaultProps = {
        checked: false,
        disabled: false,
        theme: CheckboxTheme.PURPLE
    };
    Checkbox.getDerivedStateFromProps = function (props, state) { return (state.checked === props.checked ? null : { checked: props.checked }); };
    return Checkbox;
}(React.Component));
export { Checkbox };
//# sourceMappingURL=Checkbox.js.map