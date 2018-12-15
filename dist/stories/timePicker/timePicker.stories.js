import moment from "moment";
import React from "react";
import { TimePicker } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";
var styles = require("./timePicker.stories.scss");
var format = "HH:mm A";
var now = moment()
    .hour(14)
    .minute(30);
var disabledHours = function () {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
};
var generateOptions = function (length, excludedOptions) {
    var arr = [];
    for (var value = 0; value < length; value++) {
        if (excludedOptions.indexOf(value) < 0) {
            arr.push(value);
        }
    }
    return arr;
};
var disabledMinutes = function (h) {
    switch (h) {
        case 9:
            return generateOptions(60, [30]);
        case 21:
            return generateOptions(60, [0]);
        default:
            return generateOptions(60, [0, 23, 30]);
    }
};
var disabledSeconds = function (h, m) {
    return [h + (m % 60)];
};
var onValueChange = function (value) {
    return;
};
storiesOf("Components", module).addWithJSX("TimePicker", wInfo("")(function () {
    return (React.createElement("div", { className: styles.rootContainer },
        React.createElement("div", null,
            React.createElement("h6", null, "TimePicker: ...")),
        React.createElement("div", { className: styles.itemsContainer },
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Enabled"),
                React.createElement(TimePicker, { showSecond: false, defaultValue: moment(), className: "xxx", format: format, use12Hours: true, inputReadOnly: true })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Enabled: Small"),
                React.createElement("div", { className: styles.boxSmall },
                    React.createElement(TimePicker, null))),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Disabled"),
                React.createElement(TimePicker, { showSecond: false, format: "h:mm A", use12Hours: true, inputReadOnly: true, defaultValue: moment("13:30:56", "HH:mm:ss"), disabled: true })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Disabled: Options"),
                React.createElement(TimePicker, { showSecond: false, defaultValue: now, className: "xxx", onChange: onValueChange, disabledHours: disabledHours, disabledMinutes: disabledMinutes, disabledSeconds: disabledSeconds })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Selected"),
                React.createElement(TimePicker, { defaultValue: moment("13:30:56", "HH:mm:ss") })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Hover"),
                React.createElement(TimePicker, { defaultValue: moment("13:30:56", "HH:mm:ss") })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Validation: with Error"),
                React.createElement(TimePicker, { defaultValue: moment("13:30:56", "HH:mm:ss") })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Focus/Open"),
                React.createElement(TimePicker, { defaultValue: moment("13:30:56", "HH:mm:ss") })))));
}));
//# sourceMappingURL=timePicker.stories.js.map