import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { NumberPicker } from "../../components/numberPicker";
import { CategoryName, wInfo } from "../utils";
var styles = require("./numberPicker.stories.scss");
storiesOf(CategoryName.Others, module).addWithJSX("NumberPicker", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("h6", null, "NumberPicker with previous and next button"),
    React.createElement("div", { className: styles.box },
        React.createElement(NumberPicker, { onQuantityChange: action("prev-button-click"), handleInputChange: action("prev-button-click"), quantity: 10, min: 0, max: 50 })),
    React.createElement("h6", null, "NumberPicker with disabled previous button"),
    React.createElement("div", { className: styles.box },
        React.createElement(NumberPicker, { onQuantityChange: action("prev-button-click"), handleInputChange: action("prev-button-click"), quantity: 0, min: 0, max: 50 })),
    React.createElement("h6", null, "NumberPicker with disabled next button"),
    React.createElement("div", { className: styles.box },
        React.createElement(NumberPicker, { onQuantityChange: action("prev-button-click"), handleInputChange: action("prev-button-click"), quantity: 50, min: 0, max: 50 })),
    React.createElement("h6", null, "NumberPicker with error input and disabled next button"),
    React.createElement("div", { className: styles.box },
        React.createElement(NumberPicker, { onQuantityChange: action("prev-button-click"), handleInputChange: action("prev-button-click"), quantity: 55, min: 0, max: 50 })))); }));
//# sourceMappingURL=NumberPicker.stories.js.map