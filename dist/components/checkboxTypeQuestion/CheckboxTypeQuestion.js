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
import { Checkbox } from "../checkbox";
import { TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { Tooltips } from "../tooltips";
var styles = require("./checkboxTypeQuestion.scss");
var CheckboxTypeQuestion = /** @class */ (function (_super) {
    __extends(CheckboxTypeQuestion, _super);
    function CheckboxTypeQuestion(props) {
        var _this = _super.call(this, props) || this;
        _this.onTextClick = function () {
            if (_this.props.disabled) {
                return;
            }
            _this.onCheckedValueChange(!_this.state.checked);
        };
        _this.onCheckedValueChange = function (newValue) {
            _this.setState({ checked: newValue });
            if (_this.props.onCheckboxClick) {
                _this.props.onCheckboxClick(newValue);
            }
        };
        _this.state = { checked: props.checked };
        return _this;
    }
    CheckboxTypeQuestion.prototype.render = function () {
        var _a = this.props, checked = _a.checked, disabled = _a.disabled, questionLabel = _a.questionLabel, questionDescription = _a.questionDescription, tooltip = _a.tooltip, hidden = _a.hidden;
        if (hidden) {
            return React.createElement(React.Fragment, null);
        }
        return (React.createElement("div", { className: styles.wrapper },
            React.createElement("div", { className: styles.checkboxWrapper },
                React.createElement(Checkbox, { disabled: disabled, checked: checked, onCheckboxClick: this.onCheckedValueChange })),
            React.createElement("div", { className: styles.textWrapper + " " + (disabled ? styles.disabled : "") },
                React.createElement("span", { className: styles.question },
                    React.createElement("div", { className: styles.label, onClick: this.onTextClick }, questionLabel),
                    !!tooltip && (React.createElement("div", { className: styles.tooltip },
                        React.createElement(Tooltips, { trigger: React.createElement(Icon, { type: "help", size: "16", className: styles.helpIcon }), width: 250, position: TooltipsLocationTheme.BottomRight, specializedPosition: true },
                            React.createElement("div", null, tooltip))))),
                React.createElement("span", { className: styles.description, onClick: this.onTextClick }, questionDescription))));
    };
    return CheckboxTypeQuestion;
}(React.Component));
export { CheckboxTypeQuestion };
//# sourceMappingURL=CheckboxTypeQuestion.js.map