import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./icon.stories.scss");
var icons = [
    { type: "add" },
    { type: "alert" },
    { type: "arrowNext" },
    { type: "arrowPrev" },
    { type: "business" },
    { type: "check" },
    { type: "checkbox" },
    { type: "checkmark" },
    { type: "checkmark-outline" },
    { type: "close" },
    { type: "dashboard" },
    { type: "delete" },
    { type: "document" },
    { type: "dropdown" },
    { type: "email" },
    { type: "error" },
    { type: "external-link" },
    { type: "help" },
    { type: "information" },
    { type: "informational" },
    { type: "logout" },
    { type: "new-card" },
    { type: "notification-checkmark" },
    { type: "notification-error" },
    { type: "payment" },
    { type: "profile" },
    { type: "progress" },
    { type: "radioDisabledUnselected" },
    { type: "radioEnabledUnselected" },
    { type: "radioSelected" },
    { type: "retrieve" },
    { type: "store" },
    { type: "time" },
    { type: "uen" },
    { type: "upload" },
    { type: "verify" },
    { type: "warning" }
];
var licenceIcons = [
    { type: "cot" },
    { type: "cou" },
    { type: "customs-account" },
    { type: "fire-safety" },
    { type: "food-shop" },
    { type: "halal" },
    { type: "import" },
    { type: "liquor" },
    { type: "new-licence" },
    { type: "outdoor" },
    { type: "petroleum-n-flammable" },
    { type: "public-entertainment" },
    { type: "tobacco-retail" },
    { type: "warning" }
];
storiesOf(CategoryName.Icons, module).addWithJSX("Icon", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("h6", { className: styles.header }, "Icons"),
    icons.map(function (icon, index) {
        return (React.createElement("div", { key: index, className: styles.iconWrapper },
            React.createElement("div", { className: styles.icon },
                React.createElement(Icon, { type: icon.type })),
            React.createElement("div", null,
                React.createElement("label", null, icon.type))));
    }),
    React.createElement("br", null),
    React.createElement("h6", { className: styles.header }, "Licences Icons"),
    licenceIcons.map(function (icon, index) {
        return (React.createElement("div", { key: index, className: styles.iconWrapper },
            React.createElement("div", { className: styles.icon },
                React.createElement(Icon, { category: "licences", type: icon.type })),
            React.createElement("div", null,
                React.createElement("label", null, icon.type))));
    }))); }));
//# sourceMappingURL=Icon.stories.js.map