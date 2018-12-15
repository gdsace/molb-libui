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
import Trigger from "rc-trigger";
import React from "react";
import Panel from "./Panel";
import placements from "./placements";
import "./assets/index.scss";
function noop() {
    return;
}
var RcTimePicker = /** @class */ (function (_super) {
    __extends(RcTimePicker, _super);
    function RcTimePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onPanelChange = function (value) {
            _this.setValue(value);
        };
        _this.onPanelClear = function () {
            _this.setValue(null);
            _this.setOpen(false);
        };
        _this.onVisibleChange = function (open) {
            _this.setOpen(open);
        };
        _this.onEsc = function () {
            _this.setOpen(false);
            _this.focus();
        };
        _this.onKeyDown = function (e) {
            if (e.keyCode === 40) {
                _this.setOpen(true);
            }
        };
        _this.saveInputRef = React.createRef(); // refFn.bind(this, "picker");
        _this.savePanelRef = React.createRef(); // refFn.bind(this, "panelInstance");
        var defaultOpen = props.defaultOpen, defaultValue = props.defaultValue, _a = props.open, open = _a === void 0 ? defaultOpen : _a, _b = props.value, value = _b === void 0 ? defaultValue : _b;
        _this.state = {
            open: open,
            value: value
        };
        return _this;
    }
    RcTimePicker.prototype.componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value, open = nextProps.open;
        if ("value" in nextProps) {
            this.setState({
                value: value
            });
        }
        if (open !== undefined) {
            this.setState({ open: open });
        }
    };
    RcTimePicker.prototype.setValue = function (value) {
        if (!("value" in this.props)) {
            this.setState({
                value: value
            });
        }
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };
    RcTimePicker.prototype.getFormat = function () {
        var _a = this.props, format = _a.format, showHour = _a.showHour, showMinute = _a.showMinute, showSecond = _a.showSecond, use12Hours = _a.use12Hours;
        if (format) {
            return format;
        }
        if (use12Hours) {
            var fmtString = [
                showHour ? "h" : "",
                showMinute ? "mm" : "",
                showSecond ? "ss" : ""
            ]
                .filter(function (item) { return !!item; })
                .join(":");
            return fmtString.concat(" a");
        }
        return [
            showHour ? "HH" : "",
            showMinute ? "mm" : "",
            showSecond ? "ss" : ""
        ]
            .filter(function (item) { return !!item; })
            .join(":");
    };
    RcTimePicker.prototype.getPanelElement = function () {
        var _a = this.props, prefixCls = _a.prefixCls, placeholder = _a.placeholder, disabledHours = _a.disabledHours, disabledMinutes = _a.disabledMinutes, disabledSeconds = _a.disabledSeconds, hideDisabledOptions = _a.hideDisabledOptions, inputReadOnly = _a.inputReadOnly, allowEmpty = _a.allowEmpty, showHour = _a.showHour, showMinute = _a.showMinute, showSecond = _a.showSecond, defaultOpenValue = _a.defaultOpenValue, clearText = _a.clearText, addon = _a.addon, use12Hours = _a.use12Hours, focusOnOpen = _a.focusOnOpen, onKeyDown = _a.onKeyDown, hourStep = _a.hourStep, minuteStep = _a.minuteStep, secondStep = _a.secondStep, clearIcon = _a.clearIcon;
        return (React.createElement(Panel, { clearText: clearText, prefixCls: prefixCls + "-panel", ref: this.savePanelRef, value: this.state.value, inputReadOnly: inputReadOnly, onChange: this.onPanelChange, onClear: this.onPanelClear, defaultOpenValue: defaultOpenValue, showHour: showHour, showMinute: showMinute, showSecond: showSecond, onEsc: this.onEsc, allowEmpty: allowEmpty, format: this.getFormat(), placeholder: placeholder, disabledHours: disabledHours, disabledMinutes: disabledMinutes, disabledSeconds: disabledSeconds, hideDisabledOptions: hideDisabledOptions === true, use12Hours: use12Hours, hourStep: hourStep, minuteStep: minuteStep, secondStep: secondStep, addon: addon, focusOnOpen: focusOnOpen, onKeyDown: onKeyDown, clearIcon: clearIcon, showHeader: false }));
    };
    RcTimePicker.prototype.getPopupClassName = function () {
        var _a = this.props, showHour = _a.showHour, showMinute = _a.showMinute, showSecond = _a.showSecond, use12Hours = _a.use12Hours, prefixCls = _a.prefixCls;
        var popupClassName = this.props.popupClassName;
        // Keep it for old compatibility
        if ((!showHour || !showMinute || !showSecond) && !use12Hours) {
            popupClassName += " " + prefixCls + "-panel-narrow";
        }
        var selectColumnCount = 0;
        if (showHour) {
            selectColumnCount += 1;
        }
        if (showMinute) {
            selectColumnCount += 1;
        }
        if (showSecond) {
            selectColumnCount += 1;
        }
        if (use12Hours) {
            selectColumnCount += 1;
        }
        popupClassName += " " + prefixCls + "-panel-column-" + selectColumnCount;
        return popupClassName;
    };
    RcTimePicker.prototype.setOpen = function (open) {
        var _a = this.props, onOpen = _a.onOpen, onClose = _a.onClose;
        if (this.state.open !== open) {
            if (!("open" in this.props)) {
                this.setState({ open: open });
            }
            if (open) {
                if (onOpen) {
                    onOpen({ open: open });
                }
            }
            else {
                if (onClose) {
                    onClose({ open: open });
                }
            }
        }
    };
    RcTimePicker.prototype.focus = function () {
        if (this.saveInputRef.current) {
            this.saveInputRef.current.focus();
        }
    };
    RcTimePicker.prototype.blur = function () {
        if (this.saveInputRef.current) {
            this.saveInputRef.current.blur();
        }
    };
    RcTimePicker.prototype.render = function () {
        var _a = this.props, prefixCls = _a.prefixCls, placeholder = _a.placeholder, placement = _a.placement, align = _a.align, id = _a.id, disabled = _a.disabled, transitionName = _a.transitionName, style = _a.style, className = _a.className, getPopupContainer = _a.getPopupContainer, name = _a.name, autoComplete = _a.autoComplete, onFocus = _a.onFocus, onBlur = _a.onBlur, autoFocus = _a.autoFocus, inputReadOnly = _a.inputReadOnly, inputIcon = _a.inputIcon;
        var _b = this.state, open = _b.open, value = _b.value;
        var popupClassName = this.getPopupClassName();
        return (React.createElement(Trigger, { prefixCls: prefixCls + "-panel", popupClassName: popupClassName, popup: this.getPanelElement(), popupAlign: align, builtinPlacements: placements, popupPlacement: placement, action: disabled ? [] : ["click"], destroyPopupOnHide: true, getPopupContainer: getPopupContainer, popupTransitionName: transitionName, popupVisible: open, onPopupVisibleChange: this.onVisibleChange },
            React.createElement("span", { className: prefixCls + " " + className, style: style },
                React.createElement("input", { className: prefixCls + "-input", ref: this.saveInputRef, type: "text", placeholder: placeholder, name: name, onKeyDown: this.onKeyDown, disabled: disabled, value: (value && value.format(this.getFormat())) || "", autoComplete: autoComplete, onFocus: onFocus, onBlur: onBlur, autoFocus: autoFocus, onChange: noop, readOnly: inputReadOnly, id: id }),
                inputIcon || React.createElement("span", { className: prefixCls + "-icon" }))));
    };
    RcTimePicker.defaultProps = {
        clearText: "clear",
        prefixCls: "rc-time-picker",
        defaultOpen: false,
        inputReadOnly: false,
        style: {},
        className: "",
        popupClassName: "",
        id: "",
        align: {},
        defaultOpenValue: moment(),
        allowEmpty: true,
        showHour: true,
        showMinute: true,
        showSecond: true,
        disabledHours: noop,
        disabledMinutes: noop,
        disabledSeconds: noop,
        hideDisabledOptions: false,
        placement: "bottomLeft",
        onChange: noop,
        onOpen: noop,
        onClose: noop,
        onFocus: noop,
        onBlur: noop,
        addon: noop,
        use12Hours: false,
        focusOnOpen: false,
        onKeyDown: noop
    };
    return RcTimePicker;
}(React.Component));
export { RcTimePicker };
//# sourceMappingURL=RcTimePicker.js.map