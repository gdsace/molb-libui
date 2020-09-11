import classNames from "classnames";
import * as React from "react";
import { NotificationTheme, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { InlineNotification } from "../inlineNotification";
import { Tooltips } from "../tooltips";
var styles = require("./radio.scss");
var ICON_SIZE = "16";
var getOptionIcon = function (optionValue, props) {
    if (optionValue.value === props.value) {
        return React.createElement(Icon, { type: "radioSelected" });
    }
    else {
        if (props.disabled || optionValue.disabled) {
            return React.createElement(Icon, { type: "radioDisabledUnselected" });
        }
        return React.createElement(Icon, { type: "radioEnabledUnselected" });
    }
};
var getOptionComponents = function (props) {
    var radioTextClass = classNames(props.labelStyleOverride || "", styles.optionText);
    var optionComponents = props.optionList.map(function (optionValue) {
        var _a;
        var isDisabled = props.disabled || optionValue.disabled;
        var isSelected = optionValue.value === props.value;
        var radioClassString = classNames(styles.checkBoxIcon, (_a = {},
            _a[styles.radioContentDisabled] = isDisabled,
            _a[styles.radioWrapperDisabled] = isDisabled,
            _a[styles.radioWrapperEnable] = !isDisabled,
            _a[styles.radioWrapperSelected] = isSelected,
            _a[styles.radioWrapperUnselected] = !isSelected,
            _a[styles.widthDisabled] = props.disableWidth,
            _a));
        var optionIcon = getOptionIcon(optionValue, props);
        var onRadioClick = function (event) {
            if (isDisabled || props.value === event.currentTarget.value) {
                return;
            }
            props.onChange(event.currentTarget.value);
        };
        return (React.createElement(React.Fragment, { key: optionValue.value.toString() },
            React.createElement("label", { className: radioClassString },
                React.createElement("span", null, optionIcon),
                React.createElement("input", { type: "radio", value: optionValue.value, disabled: isDisabled, onClick: onRadioClick }),
                React.createElement("span", { className: radioTextClass }, optionValue.label)),
            isSelected && props.subsequentQuestion));
    });
    return optionComponents;
};
export var Radio = function (props) {
    var optionComponents = getOptionComponents(props);
    var radioClass = classNames(props.className ? props.className : "", styles.radioWrapper);
    var radioTextClass = classNames(props.disabled ? styles.radioContentDisabled : "", props.radioTextStyleOverride || "", styles.radioText);
    var radioLabelClass = classNames(props.radioLabelLineBreak ? styles.radioLabelLineBreak : styles.radioLabel, styles.radioLabel);
    var radioHeaderClass = classNames(props.showTooltip ? styles.radioWithToolTip : "");
    var radioPanelClass = classNames(props.text || props.text ? styles.panel : "");
    return (React.createElement("div", { id: props.id, className: radioClass },
        React.createElement("div", { className: radioPanelClass }, props.label && (React.createElement("div", { className: styles.questionLabel }, props.label))),
        React.createElement("div", { className: radioHeaderClass },
            props.text && React.createElement("div", { className: radioTextClass }, props.text),
            props.addOnBelowText && React.createElement("div", null, props.addOnBelowText),
            props.showTooltip && (React.createElement(Tooltips, { trigger: function (open) { return (React.createElement(Icon, { type: "help", size: ICON_SIZE, className: classNames(styles.labelIcon, open && styles.openTooltip) })); }, position: props.toolTipsPosition
                    ? props.toolTipsPosition
                    : TooltipsLocationTheme.BottomCenter, specializedPosition: true },
                React.createElement("div", { className: styles.toolTipsContent }, props.toolTipsContent)))),
        props.promptMessage && props.promptMessage.display && (React.createElement("div", { className: styles.notification },
            React.createElement(InlineNotification, { text: props.promptMessage.message, theme: NotificationTheme.Informational }))),
        props.showError && (React.createElement("div", { className: styles.errorMsg },
            props.errorMsg,
            " ")),
        React.createElement("div", { className: radioLabelClass }, optionComponents)));
};
//# sourceMappingURL=Radio.js.map