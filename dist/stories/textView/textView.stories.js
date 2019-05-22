import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { TextView } from "../../components";
import { mockLongText } from "../../components/textView/__tests__/mockText";
import { CategoryName, wInfo } from "../utils";
var textViewStyle = {
    width: 800,
    height: 300
};
var styles = {
    margin: "36px"
};
storiesOf(CategoryName.TextFields, module).addWithJSX("TextView", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("div", { style: styles },
        React.createElement("h6", null, "TextView can render use reactNode"),
        React.createElement("div", { style: textViewStyle },
            React.createElement(TextView, null,
                React.createElement("div", null,
                    React.createElement("p", null, "You can write html here in an easy way"),
                    React.createElement("p", null, "You can edit styles with textViewStyle if you like"))))),
    React.createElement("div", { style: styles },
        React.createElement("h6", null, "You can pass html into the TextView with props shouldRenderWithHTMLString = true"),
        React.createElement("div", { style: textViewStyle },
            React.createElement(TextView, { shouldRenderWithHTMLString: true }, mockLongText))),
    React.createElement("div", { style: styles },
        React.createElement("h6", null, "when you scoll to the bottom, it will file a action"),
        React.createElement("div", { style: textViewStyle },
            React.createElement(TextView, { shouldRenderWithHTMLString: true, callbackAfterReachBottom: action("reach to the bottom") }, mockLongText))))); }));
//# sourceMappingURL=textView.stories.js.map