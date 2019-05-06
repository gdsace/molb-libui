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
var shopTypesIcons = [
    { type: "bakery" },
    { type: "bakery-retail" },
    { type: "canteen-without-stalls" },
    { type: "canteen-school" },
    { type: "eating-house" },
    { type: "food-caterer" },
    { type: "takeaway" },
    { type: "restaurant" },
    { type: "in-house-kitchen" },
    { type: "snack-bar" },
    { type: "grilling" },
    { type: "market-produce" },
    { type: "restaurant-cater" },
    { type: "canteen-catering" },
    { type: "food-court" },
    { type: "private-market" },
    { type: "canteen-with-stalls" },
    { type: "canteen-construction" },
    { type: "mobile-food-wagon" },
    { type: "food-cart" },
    { type: "others" },
    { type: "pub-bar" },
    { type: "food-vending-machines" },
    { type: "pets-allowed" },
    { type: "herbal-tea" }
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
    }),
    React.createElement("h6", { className: styles.header }, "Shop Types Icons"),
    React.createElement("div", { className: styles.shopTypeIconsNote },
        React.createElement("p", null, "Food shop type icons are dual colours, and defaulted to black and purple."),
        React.createElement("p", null, "To change, give the Icon a className and edit the css-style '--color1' and '--color2'."),
        React.createElement("p", null, "Please refer to Icon.stories.tsx")),
    React.createElement("table", { className: styles.foodShopIconsTable },
        React.createElement("tr", null,
            React.createElement("th", null, "icon type"),
            React.createElement("th", null, "default color"),
            React.createElement("th", null, "custom color")),
        shopTypesIcons.map(function (icon, index) {
            return (React.createElement("tr", { key: index },
                React.createElement("td", null, icon.type),
                React.createElement("td", null,
                    React.createElement(Icon, { category: "shoptypes", type: icon.type })),
                React.createElement("td", null,
                    React.createElement(Icon, { category: "shoptypes", type: icon.type, className: styles.dualColorTheme }))));
        })))); }));
//# sourceMappingURL=Icon.stories.js.map