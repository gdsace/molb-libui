import React from "react";
import { storiesOf } from "@storybook/react";
import { TextArea } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./textArea.stories.scss");
storiesOf(CategoryName.TextFields, module).addWithJSX("TextArea", wInfo("")(function () {
    return (React.createElement("div", { className: styles.rootContainer },
        React.createElement("div", null,
            React.createElement("h6", null, "TextArea: ...")),
        React.createElement("div", { className: styles.itemsContainer },
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Enabled: White/Grey background"),
                React.createElement(TextArea, { title: "Description", placeholder: "What is your brand concept? What kind of food do you sell?", maxLength: 300, overwrite: true })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Enabled: With Icon"),
                React.createElement(TextArea, { title: "Description", placeholder: "What is your brand concept? What kind of food do you sell?", maxLength: 300, overwrite: true, iconType: "help", helperText: "Some helper text", errorMsg: "Please reduce the number of characters", value: "First line\nSecond line" })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Enabled: Filled"),
                React.createElement(TextArea, { title: "Description", placeholder: "What is your brand concept? What kind of food do you sell?", maxLength: 300, overwrite: true, iconType: "help", helperText: "Some helper text", errorMsg: "Please reduce the number of characters", value: "First line\nSecond line" })),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Disabled:"),
                React.createElement(TextArea, { title: "Description", placeholder: "What is your brand concept? What kind of food do you sell?", maxLength: 300, overwrite: true, iconType: "help", disabled: true, helperText: "Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)", errorMsg: "Please reduce the number of characters", value: "First line\nSecond line" }),
                React.createElement("p", { className: styles.content }, "Other following contents (Input error msg should float on this)")),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Disabled: shown placeholder"),
                React.createElement(TextArea, { title: "Description", placeholder: "What is your brand concept? What kind of food do you sell?", maxLength: 300, overwrite: true, iconType: "help", disabled: true, helperText: "Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)", errorMsg: "Please reduce the number of characters" }),
                React.createElement("p", { className: styles.content }, "Other following contents (Input error msg should float on this)")),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Validation Error:"),
                React.createElement(TextArea, { title: "Description", placeholder: "What is your brand concept? What kind of food do you sell?", maxLength: 300, overwrite: true, iconType: "help", helperText: "Some helper text", errorMsg: "Please reduce the number of characters", showError: true, value: "First line\nSecond line" }),
                React.createElement("p", { className: styles.content }, "Other following contents (Input error msg should float on this)")))));
}));
//# sourceMappingURL=textArea.stories.js.map