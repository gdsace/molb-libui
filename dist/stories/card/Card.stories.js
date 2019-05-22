import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Card, CardTheme, Link, TagTheme } from "../../components";
import { CategoryName, wInfo } from "../utils";
var description = (React.createElement("div", null,
    "This is description for this card. You can inject any content as a react node into this description patr.",
    " "));
var title = "This is title";
var subtitle = "This is subtitle";
var longSubtitle = "This is loooooooooog loooooooooog loooooooooog loooooooooog loooooooooog loooooooooog subtitle";
var price = "S$800.00";
var actionField = (React.createElement(Link, { label: "link button", icon: "arrowNext", onClick: action("link-click"), link: "https://www.google.com" }));
var date = "10 Jan 2010 to 10 Jan 2020";
var rowStyles = {
    padding: "20px 0"
};
storiesOf(CategoryName.Cards, module).addWithJSX("Card", wInfo("")(function () { return (React.createElement("div", { style: { padding: "10px" } },
    "Description Cards",
    React.createElement("div", { style: rowStyles },
        React.createElement(Card, { title: title, subtitle: subtitle, description: description, theme: CardTheme.Normal, supportingText: price, status: "In Processing", statusTheme: TagTheme.Blue }),
        React.createElement(Card, { title: title, subtitle: subtitle, description: description, theme: CardTheme.Warning, supportingText: price }),
        React.createElement(Card, { title: title, subtitle: subtitle, description: description, theme: CardTheme.Green }),
        React.createElement(Card, { title: title, subtitle: subtitle, description: description, theme: CardTheme.Purple }),
        React.createElement(Card, { title: title, subtitle: subtitle, description: description, theme: CardTheme.Normal, supportingText: price, status: "Pending Payment", statusTheme: TagTheme.Green, date: date }),
        React.createElement(Card, { title: title, subtitle: subtitle, description: description, theme: CardTheme.Normal, supportingText: price, status: "Draft", statusTheme: TagTheme.Grey, date: date })),
    "Clickable Cards",
    React.createElement("div", { style: rowStyles },
        React.createElement(Card, { title: title, subtitle: subtitle, description: description, theme: CardTheme.Clickable, supportingText: price, onClick: action("card-click"), actionField: actionField })),
    "Long title & description",
    React.createElement("div", { style: rowStyles },
        React.createElement(Card, { title: title, subtitle: longSubtitle, description: description, supportingText: price, theme: CardTheme.Normal })))); }));
//# sourceMappingURL=Card.stories.js.map