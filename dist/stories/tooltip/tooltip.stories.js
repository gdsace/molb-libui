import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon, Tooltips, TooltipsLocationTheme } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./tooltip.stories.scss");
storiesOf(CategoryName.Tooltips, module).addWithJSX("Tooltips", wInfo("")(function () { return (React.createElement("div", { className: styles.rootContainer },
    React.createElement("h6", { className: styles.groupHeader }, "Tooltips Themes: ..."),
    React.createElement("div", { className: styles.itemsContainer },
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Position: BottomLeft"),
            React.createElement(Tooltips, { trigger: React.createElement(Icon, { type: "help", size: "16" }), position: TooltipsLocationTheme.BottomLeft, specializedPosition: true },
                React.createElement("div", null, "When use specializedPosition, component will just the arrow position"))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Position: BottomCenter"),
            React.createElement(Tooltips, { trigger: React.createElement(Icon, { type: "help", size: "16" }), position: TooltipsLocationTheme.BottomCenter, specializedPosition: true },
                React.createElement("div", null, "center position won't change"))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Position: BottomRight"),
            React.createElement(Tooltips, { trigger: React.createElement(Icon, { type: "help", size: "16" }), position: TooltipsLocationTheme.BottomRight, specializedPosition: true },
                React.createElement("div", null, "When use specializedPosition, component will just the arrow position"))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Position: BottomLeft, customized size+icon"),
            React.createElement(Tooltips, { trigger: React.createElement(Icon, { type: "payment", size: "16" }), position: TooltipsLocationTheme.BottomLeft, width: 250, height: 128 },
                React.createElement("div", null, "You can custom the height and width with props"))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Position: BottomRight"),
            React.createElement(Tooltips, { trigger: React.createElement(Icon, { type: "help", size: "16" }), position: TooltipsLocationTheme.BottomRight, width: 240, linkLabel: "Link Button", linkUrl: "http://www.baidu.com" },
                React.createElement("div", null, "Tooltip Label")))))); }));
//# sourceMappingURL=tooltip.stories.js.map