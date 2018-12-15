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
import moment from "moment";
import React, { Component } from "react";
import Combobox from "./Combobox";
import Header from "./Header";
function noop() {
    return;
}
function generateOptions(length, disabledOptions, hideDisabledOptions, step) {
    if (step === void 0) { step = 1; }
    var arr = [];
    for (var value = 0; value < length; value += step) {
        if (!disabledOptions ||
            disabledOptions.indexOf(value) < 0 ||
            !hideDisabledOptions) {
            arr.push(value);
        }
    }
    return arr;
}
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (newValue) {
            _this.setState({ value: newValue });
            if (_this.props.onChange) {
                _this.props.onChange(newValue);
            }
        };
        _this.onCurrentSelectPanelChange = function (currentSelectPanel) {
            _this.setState({ currentSelectPanel: currentSelectPanel });
        };
        _this.disabledHours = function () {
            var _a = _this.props, use12Hours = _a.use12Hours, disabledHours = _a.disabledHours;
            if (!disabledHours) {
                return;
            }
            var disabledOptions = disabledHours();
            if (use12Hours && Array.isArray(disabledOptions)) {
                if (_this.isAM()) {
                    disabledOptions = disabledOptions
                        .filter(function (h) { return h < 12; })
                        .map(function (h) { return (h === 0 ? 12 : h); });
                }
                else {
                    disabledOptions = disabledOptions.map(function (h) { return (h === 12 ? 12 : h - 12); });
                }
            }
            return disabledOptions;
        };
        _this.state = {
            value: props.value,
            currentSelectPanel: "",
            selectionRange: []
        };
        return _this;
    }
    Panel.prototype.componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value;
        if (value) {
            this.setState({
                value: value
            });
        }
    };
    // https://github.com/ant-design/ant-design/issues/5829
    Panel.prototype.close = function () {
        if (this.props.onEsc) {
            this.props.onEsc();
        }
    };
    Panel.prototype.isAM = function () {
        var value = this.state.value || this.props.defaultOpenValue;
        return value.hour() >= 0 && value.hour() < 12;
    };
    Panel.prototype.render = function () {
        var _a;
        var _b = this.props, prefixCls = _b.prefixCls, className = _b.className, placeholder = _b.placeholder, disabledMinutes = _b.disabledMinutes, disabledSeconds = _b.disabledSeconds, hideDisabledOptions = _b.hideDisabledOptions, allowEmpty = _b.allowEmpty, showHour = _b.showHour, showMinute = _b.showMinute, showSecond = _b.showSecond, format = _b.format, defaultOpenValue = _b.defaultOpenValue, clearText = _b.clearText, onEsc = _b.onEsc, addon = _b.addon, use12Hours = _b.use12Hours, onClear = _b.onClear, focusOnOpen = _b.focusOnOpen, onKeyDown = _b.onKeyDown, hourStep = _b.hourStep, minuteStep = _b.minuteStep, secondStep = _b.secondStep, inputReadOnly = _b.inputReadOnly, clearIcon = _b.clearIcon, showHeader = _b.showHeader;
        var _c = this.state, value = _c.value, currentSelectPanel = _c.currentSelectPanel;
        var disabledHourOptions = this.disabledHours();
        var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
        var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
        var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
        var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
        var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);
        return (React.createElement("div", { className: classNames((_a = {},
                _a[prefixCls + "-inner"] = true,
                _a["" + className] = !!className,
                _a)) },
            showHeader && (React.createElement(Header, { clearText: clearText, prefixCls: prefixCls, defaultOpenValue: defaultOpenValue, value: value, currentSelectPanel: currentSelectPanel, onEsc: onEsc, format: format, placeholder: placeholder, hourOptions: hourOptions, minuteOptions: minuteOptions, secondOptions: secondOptions, disabledHours: this.disabledHours, disabledMinutes: disabledMinutes, disabledSeconds: disabledSeconds, onChange: this.onChange, onClear: onClear, allowEmpty: allowEmpty, focusOnOpen: focusOnOpen, onKeyDown: onKeyDown, inputReadOnly: inputReadOnly, clearIcon: clearIcon })),
            React.createElement(Combobox, { prefixCls: prefixCls, value: value, defaultOpenValue: defaultOpenValue, format: format, onChange: this.onChange, showHour: showHour, showMinute: showMinute, showSecond: showSecond, hourOptions: hourOptions, minuteOptions: minuteOptions, secondOptions: secondOptions, disabledHours: this.disabledHours, disabledMinutes: disabledMinutes, disabledSeconds: disabledSeconds, onCurrentSelectPanelChange: this.onCurrentSelectPanelChange, use12Hours: use12Hours, isAM: this.isAM() }),
            addon && addon(this)));
    };
    Panel.defaultProps = {
        prefixCls: "rc-time-picker-panel",
        onChange: noop,
        onClear: noop,
        disabledHours: noop,
        disabledMinutes: noop,
        disabledSeconds: noop,
        defaultOpenValue: moment(),
        use12Hours: false,
        addon: noop,
        onKeyDown: noop,
        inputReadOnly: false,
        showHeader: true
    };
    return Panel;
}(Component));
export { Panel };
export default Panel;
//# sourceMappingURL=Panel.js.map