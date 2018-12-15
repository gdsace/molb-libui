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
import moment from "moment";
import React, { Component } from "react";
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.onInputChange = function (event) {
            var str = event.target.value;
            _this.setState({
                str: str
            });
            var _a = _this.props, format = _a.format, hourOptions = _a.hourOptions, minuteOptions = _a.minuteOptions, secondOptions = _a.secondOptions, disabledHours = _a.disabledHours, disabledMinutes = _a.disabledMinutes, disabledSeconds = _a.disabledSeconds, onChange = _a.onChange, allowEmpty = _a.allowEmpty;
            if (str) {
                var originalValue = _this.props.value;
                var value = _this.getProtoValue().clone();
                var parsed = moment(str, format, true);
                if (!parsed.isValid()) {
                    _this.setState({
                        invalid: true
                    });
                    return;
                }
                value
                    .hour(parsed.hour())
                    .minute(parsed.minute())
                    .second(parsed.second());
                // if time value not allowed, response warning.
                if (hourOptions.indexOf(value.hour()) < 0 ||
                    minuteOptions.indexOf(value.minute()) < 0 ||
                    secondOptions.indexOf(value.second()) < 0) {
                    _this.setState({
                        invalid: true
                    });
                    return;
                }
                // if time value is disabled, response warning.
                var disabledHourOptions = disabledHours && disabledHours();
                var disabledMinuteOptions = disabledMinutes && disabledMinutes(value.hour());
                var disabledSecondOptions = disabledSeconds && disabledSeconds(value.hour(), value.minute());
                if ((disabledHourOptions &&
                    disabledHourOptions.indexOf(value.hour()) >= 0) ||
                    (disabledMinuteOptions &&
                        disabledMinuteOptions.indexOf(value.minute()) >= 0) ||
                    (disabledSecondOptions &&
                        disabledSecondOptions.indexOf(value.second()) >= 0)) {
                    _this.setState({
                        invalid: true
                    });
                    return;
                }
                if (originalValue) {
                    if (originalValue.hour() !== value.hour() ||
                        originalValue.minute() !== value.minute() ||
                        originalValue.second() !== value.second()) {
                        // keep other fields for rc-calendar
                        var changedValue = originalValue.clone();
                        changedValue.hour(value.hour());
                        changedValue.minute(value.minute());
                        changedValue.second(value.second());
                        if (onChange) {
                            onChange(changedValue);
                        }
                    }
                }
                else if (originalValue !== value) {
                    if (onChange) {
                        onChange(value);
                    }
                }
            }
            else if (allowEmpty) {
                if (onChange) {
                    onChange(null);
                }
            }
            else {
                _this.setState({
                    invalid: true
                });
                return;
            }
            _this.setState({
                invalid: false
            });
        };
        _this.onKeyDown = function (e) {
            var _a = _this.props, onEsc = _a.onEsc, onKeyDown = _a.onKeyDown;
            if (e.keyCode === 27) {
                if (onEsc) {
                    onEsc();
                }
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        _this.onClear = function () {
            _this.setState({ str: "" });
            if (_this.props.onClear) {
                _this.props.onClear();
            }
        };
        _this.inputRef = React.createRef();
        var value = props.value, format = props.format;
        _this.state = {
            str: (value && value.format(format)) || "",
            invalid: false
        };
        return _this;
    }
    Header.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.focusOnOpen) {
            // Wait one frame for the panel to be positioned before focusing
            var requestAnimationFrame_1 = window.requestAnimationFrame || window.setTimeout;
            requestAnimationFrame_1(function () {
                if (_this.inputRef.current) {
                    _this.inputRef.current.focus();
                    _this.inputRef.current.select();
                }
            });
        }
    };
    Header.prototype.componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value, format = nextProps.format;
        this.setState({
            str: (value && value.format(format)) || "",
            invalid: false
        });
    };
    Header.prototype.getClearButton = function () {
        var _a = this.props, prefixCls = _a.prefixCls, allowEmpty = _a.allowEmpty, clearIcon = _a.clearIcon;
        if (!allowEmpty) {
            return null;
        }
        return (React.createElement("a", { role: "button", className: prefixCls + "-clear-btn", title: this.props.clearText, onMouseDown: this.onClear }, clearIcon || React.createElement("i", { className: prefixCls + "-clear-btn-icon" })));
    };
    Header.prototype.getProtoValue = function () {
        return this.props.value || this.props.defaultOpenValue;
    };
    Header.prototype.getInput = function () {
        var _a = this.props, prefixCls = _a.prefixCls, placeholder = _a.placeholder, inputReadOnly = _a.inputReadOnly;
        var _b = this.state, invalid = _b.invalid, str = _b.str;
        var invalidClass = invalid ? prefixCls + "-input-invalid" : "";
        return (React.createElement("input", { className: prefixCls + "-input  " + invalidClass, ref: this.inputRef, onKeyDown: this.onKeyDown, value: str, placeholder: placeholder, onChange: this.onInputChange, readOnly: inputReadOnly }));
    };
    Header.prototype.render = function () {
        var prefixCls = this.props.prefixCls;
        return (React.createElement("div", { className: prefixCls + "-input-wrap" },
            this.getInput(),
            this.getClearButton()));
    };
    Header.defaultProps = {
        inputReadOnly: false
    };
    return Header;
}(Component));
export { Header };
export default Header;
//# sourceMappingURL=Header.js.map