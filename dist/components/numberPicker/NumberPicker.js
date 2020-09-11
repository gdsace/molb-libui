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
import * as _ from "lodash";
import * as React from "react";
import { Button, Input, Size, Theme } from "..";
import { InputType } from "../EnumValues";
var styles = require("./numberPicker.scss");
var NumberPicker = /** @class */ (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.DecreaseItem = function () {
            var _a = _this.props, quantity = _a.quantity, min = _a.min, max = _a.max;
            var inputError = _this.state.inputError;
            if (quantity > min && quantity <= max + 1) {
                if (inputError) {
                    _this.setState({
                        inputError: false
                    });
                }
            }
            _this.props.onQuantityChange(quantity - 1);
        };
        _this.IncrementItem = function () {
            var _a = _this.props, quantity = _a.quantity, max = _a.max;
            var inputError = _this.state.inputError;
            if (quantity < max) {
                if (inputError) {
                    _this.setState({
                        inputError: false
                    });
                }
                _this.props.onQuantityChange(quantity + 1);
            }
        };
        _this.onInputChange = function (value) {
            var newQuantity = Number(value);
            var max = _this.props.max;
            var inputError = _this.state.inputError;
            if (newQuantity > max) {
                if (!inputError) {
                    _this.setState({
                        inputError: true
                    });
                }
            }
            else {
                if (inputError) {
                    _this.setState({
                        inputError: false
                    });
                }
            }
            _this.props.handleInputChange(newQuantity);
        };
        _this.state = {
            inputError: props.quantity > props.max ? true : false
        };
        return _this;
    }
    NumberPicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, disablePrev = _a.disablePrev, disableNext = _a.disableNext, disableInput = _a.disableInput, quantity = _a.quantity, min = _a.min, max = _a.max;
        var wrapperClassName = classNames(className ? className : "");
        var inputError = classNames(this.state.inputError ? styles.inputError : "");
        return (React.createElement("div", { className: styles.mainWrapper + " " + wrapperClassName },
            React.createElement(Button, { className: styles.prevButton, size: Size.SmallSquare, theme: Theme.DarkGrey, icon: "minus", iconAlign: "center", disabled: !_.isNil(disablePrev) ? disablePrev : quantity <= min, onClick: this.DecreaseItem ||
                    (function () {
                        /* noop */
                    }) }),
            React.createElement("div", { className: styles.inputContainer },
                React.createElement(Input, { maxLength: 3, value: quantity || 0, className: styles.numInput + " " + inputError + " " + (quantity === 0 ? styles.minValue : ""), disabled: disableInput || false, type: InputType.DigitsOnly, onChange: function (event) { return _this.onInputChange(event.target.value); } })),
            React.createElement(Button, { className: styles.nextButton, size: Size.SmallSquare, theme: Theme.DarkGrey, icon: "plus", iconAlign: "center", disabled: !_.isNil(disableNext) ? disableNext : quantity >= max, onClick: this.IncrementItem ||
                    (function () {
                        /* noop */
                    }) })));
    };
    NumberPicker.defaultProps = {
        quantity: 0,
        max: 50,
        min: 0
    };
    return NumberPicker;
}(React.Component));
export { NumberPicker };
//# sourceMappingURL=NumberPicker.js.map