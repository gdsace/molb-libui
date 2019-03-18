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
import classNames from "classnames";
import Panel from "./Panel";
import placements from "./placements";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import "./assets/index.scss";
function noop() {
    return;
}
var TimePicker = /** @class */ (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onPanelChange = function (value) {
            _this.setValue(value);
            _this.focus();
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
    TimePicker.prototype.componentWillReceiveProps = function (nextProps) {
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
    TimePicker.prototype.setValue = function (value) {
        if (!("value" in this.props)) {
            this.setState({
                value: value
            });
        }
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };
    TimePicker.prototype.getFormat = function () {
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
    TimePicker.prototype.getPanelElement = function () {
        var _a = this.props, prefixCls = _a.prefixCls, placeholder = _a.placeholder, disabledHours = _a.disabledHours, disabledMinutes = _a.disabledMinutes, disabledSeconds = _a.disabledSeconds, hideDisabledOptions = _a.hideDisabledOptions, inputReadOnly = _a.inputReadOnly, allowEmpty = _a.allowEmpty, showHour = _a.showHour, showMinute = _a.showMinute, showSecond = _a.showSecond, defaultOpenValue = _a.defaultOpenValue, clearText = _a.clearText, addon = _a.addon, use12Hours = _a.use12Hours, focusOnOpen = _a.focusOnOpen, onKeyDown = _a.onKeyDown, hourStep = _a.hourStep, minuteStep = _a.minuteStep, secondStep = _a.secondStep, clearIcon = _a.clearIcon;
        return (React.createElement(Panel, { clearText: clearText, prefixCls: prefixCls + "-panel", ref: this.savePanelRef, value: this.state.value && moment(this.state.value), inputReadOnly: inputReadOnly, onChange: this.onPanelChange, onClear: this.onPanelClear, defaultOpenValue: defaultOpenValue, showHour: showHour, showMinute: showMinute, showSecond: showSecond, onEsc: this.onEsc, allowEmpty: allowEmpty, format: this.getFormat(), placeholder: placeholder, disabledHours: disabledHours, disabledMinutes: disabledMinutes, disabledSeconds: disabledSeconds, hideDisabledOptions: hideDisabledOptions === true, use12Hours: use12Hours, hourStep: hourStep, minuteStep: minuteStep, secondStep: secondStep, addon: addon, focusOnOpen: focusOnOpen, onKeyDown: onKeyDown, clearIcon: clearIcon, showHeader: false }));
    };
    TimePicker.prototype.getPopupClassName = function () {
        var _a = this.props, showHour = _a.showHour, showMinute = _a.showMinute, showSecond = _a.showSecond, use12Hours = _a.use12Hours, prefixCls = _a.prefixCls;
        var popupClassName = this.props.popupClassName;
        // Keep it for old compatibility
        // if ((!showHour || !showMinute || !showSecond) && !use12Hours) {
        //   popupClassName += ` ${prefixCls}-panel-narrow`;
        // }
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
    TimePicker.prototype.setOpen = function (open) {
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
    TimePicker.prototype.focus = function () {
        if (this.saveInputRef.current) {
            this.saveInputRef.current.focus();
        }
    };
    TimePicker.prototype.blur = function () {
        if (this.saveInputRef.current) {
            this.saveInputRef.current.blur();
        }
    };
    TimePicker.prototype.render = function () {
        var _a;
        var _b = this.props, prefixCls = _b.prefixCls, placeholder = _b.placeholder, placement = _b.placement, align = _b.align, id = _b.id, disabled = _b.disabled, transitionName = _b.transitionName, style = _b.style, className = _b.className, getPopupContainer = _b.getPopupContainer, name = _b.name, autoComplete = _b.autoComplete, onFocus = _b.onFocus, onBlur = _b.onBlur, autoFocus = _b.autoFocus, inputReadOnly = _b.inputReadOnly, inputIcon = _b.inputIcon, title = _b.title, errorMsg = _b.errorMsg, showError = _b.showError;
        var _c = this.state, open = _c.open, value = _c.value;
        var popupClassName = this.getPopupClassName();
        var textInputClassName = classNames(prefixCls + "-input", (_a = {},
            _a[prefixCls + "-error"] = showError,
            _a));
        return (React.createElement("div", { className: prefixCls + "-root-container" },
            title && (React.createElement("div", { className: prefixCls + "-header-section", "data-scrollpoint": true },
                React.createElement("label", { className: prefixCls + "-title" }, title))),
            React.createElement(Trigger, { prefixCls: prefixCls + "-panel", popupClassName: popupClassName, popup: this.getPanelElement(), popupAlign: align, builtinPlacements: placements, popupPlacement: placement, action: disabled ? [] : ["click"], destroyPopupOnHide: true, getPopupContainer: getPopupContainer, popupTransitionName: transitionName, popupVisible: open, onPopupVisibleChange: this.onVisibleChange },
                React.createElement("span", { className: prefixCls + " " + className, style: style },
                    React.createElement("input", { className: textInputClassName, ref: this.saveInputRef, type: "text", placeholder: placeholder, name: name, onKeyDown: this.onKeyDown, disabled: disabled, value: (value && moment(value).format(this.getFormat())) || "", autoComplete: autoComplete, onFocus: onFocus, onBlur: onBlur, autoFocus: autoFocus, onChange: noop, readOnly: inputReadOnly, id: id }),
                    inputIcon || (React.createElement(Icon, { type: "time", size: "16", className: prefixCls + "-input-icon" })))),
            showError && (React.createElement("div", { className: "" + addLocatedErrorClassname(prefixCls + "-footer-section") },
                React.createElement("div", { className: prefixCls + "-footer-message" }, errorMsg)))));
    };
    TimePicker.defaultProps = {
        clearText: "clear",
        prefixCls: "rc-time-picker",
        defaultOpen: false,
        inputReadOnly: false,
        style: {},
        className: "",
        popupClassName: "",
        id: "",
        align: {},
        defaultOpenValue: moment()
            .hour(0)
            .minute(0),
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
        focusOnOpen: true,
        onKeyDown: noop,
        showError: false
    };
    return TimePicker;
}(React.Component));
export { TimePicker };
//# sourceMappingURL=TimePicker.js.map