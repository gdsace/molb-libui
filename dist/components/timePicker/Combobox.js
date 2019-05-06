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
import React, { Component } from "react";
import Select from "./Select";
var formatOption = function (option, disabledOptions) {
    var value = "" + option;
    if (option < 10) {
        value = "0" + option;
    }
    var disabled = false;
    if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
        disabled = true;
    }
    return {
        value: value,
        disabled: disabled
    };
};
var Combobox = /** @class */ (function (_super) {
    __extends(Combobox, _super);
    function Combobox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onItemChange = function (type, itemValue) {
            var _a = _this.props, onChange = _a.onChange, defaultOpenValue = _a.defaultOpenValue, use12Hours = _a.use12Hours;
            var value = (_this.props.value || defaultOpenValue).clone();
            if (type === "hour") {
                if (use12Hours) {
                    if (_this.props.isAM) {
                        value.hour(+itemValue % 12);
                    }
                    else {
                        value.hour((+itemValue % 12) + 12);
                    }
                }
                else {
                    value.hour(+itemValue);
                }
            }
            else if (type === "minute") {
                value.minute(+itemValue);
            }
            else if (type === "ampm") {
                var ampm = itemValue.toUpperCase();
                if (use12Hours) {
                    if (ampm === "PM" && value.hour() < 12) {
                        value.hour((value.hour() % 12) + 12);
                    }
                    if (ampm === "AM") {
                        if (value.hour() >= 12) {
                            value.hour(value.hour() - 12);
                        }
                    }
                }
            }
            else {
                value.second(+itemValue);
            }
            onChange(value);
        };
        _this.onEnterSelectPanel = function (range) {
            if (_this.props.onCurrentSelectPanelChange) {
                _this.props.onCurrentSelectPanelChange(range);
            }
        };
        return _this;
    }
    Combobox.prototype.getHourSelect = function (hour) {
        var _a = this.props, prefixCls = _a.prefixCls, hourOptions = _a.hourOptions, disabledHours = _a.disabledHours, showHour = _a.showHour, use12Hours = _a.use12Hours;
        if (!showHour) {
            return null;
        }
        var disabledOptions = disabledHours && disabledHours();
        var hourOptionsAdj;
        var hourAdj;
        if (use12Hours) {
            hourOptionsAdj = [12].concat(hourOptions.filter(function (h) { return h < 12 && h > 0; }));
            hourAdj = hour % 12 || 12;
        }
        else {
            hourOptionsAdj = hourOptions;
            hourAdj = hour;
        }
        return (React.createElement(Select, { prefixCls: prefixCls, options: hourOptionsAdj.map(function (option) {
                return formatOption(option, disabledOptions);
            }), selectedIndex: hourOptionsAdj.indexOf(hourAdj), type: "hour", onSelect: this.onItemChange, onMouseEnter: this.onEnterSelectPanel.bind(this, "hour") }));
    };
    Combobox.prototype.getMinuteSelect = function (minute) {
        var _a = this.props, prefixCls = _a.prefixCls, minuteOptions = _a.minuteOptions, disabledMinutes = _a.disabledMinutes, defaultOpenValue = _a.defaultOpenValue, showMinute = _a.showMinute;
        if (!showMinute) {
            return null;
        }
        var value = this.props.value || defaultOpenValue;
        var disabledOptions = disabledMinutes && disabledMinutes(value.hour());
        return (React.createElement(Select, { prefixCls: prefixCls, options: minuteOptions.map(function (option) {
                return formatOption(option, disabledOptions);
            }), selectedIndex: minuteOptions.indexOf(minute), type: "minute", onSelect: this.onItemChange, onMouseEnter: this.onEnterSelectPanel.bind(this, "minute") }));
    };
    Combobox.prototype.getSecondSelect = function (second) {
        var _a = this.props, prefixCls = _a.prefixCls, secondOptions = _a.secondOptions, disabledSeconds = _a.disabledSeconds, showSecond = _a.showSecond, defaultOpenValue = _a.defaultOpenValue;
        if (!showSecond) {
            return null;
        }
        var value = this.props.value || defaultOpenValue;
        var disabledOptions = disabledSeconds && disabledSeconds(value.hour(), value.minute());
        return (React.createElement(Select, { prefixCls: prefixCls, options: secondOptions.map(function (option) {
                return formatOption(option, disabledOptions);
            }), selectedIndex: secondOptions.indexOf(second), type: "second", onSelect: this.onItemChange, onMouseEnter: this.onEnterSelectPanel.bind(this, "second") }));
    };
    Combobox.prototype.getAMPMSelect = function () {
        var _a = this.props, prefixCls = _a.prefixCls, use12Hours = _a.use12Hours, format = _a.format;
        if (!use12Hours) {
            return null;
        }
        var AMPMOptions = ["am", "pm"] // If format has A char, then we should uppercase AM/PM
            .map(function (c) { return (format.match(/\sA/) ? c.toUpperCase() : c); })
            .map(function (c) { return ({ value: c }); });
        var selected = this.props.isAM ? 0 : 1;
        return (React.createElement(Select, { prefixCls: prefixCls, options: AMPMOptions, selectedIndex: selected, type: "ampm", onSelect: this.onItemChange, onMouseEnter: this.onEnterSelectPanel.bind(this, "ampm") }));
    };
    Combobox.prototype.render = function () {
        var _a = this.props, prefixCls = _a.prefixCls, defaultOpenValue = _a.defaultOpenValue;
        var value = this.props.value || defaultOpenValue;
        return (React.createElement("div", { className: prefixCls + "-combobox" },
            this.getHourSelect(value.hour()),
            this.getMinuteSelect(value.minute()),
            this.getSecondSelect(value.second()),
            this.getAMPMSelect()));
    };
    return Combobox;
}(Component));
export { Combobox };
export default Combobox;
//# sourceMappingURL=Combobox.js.map