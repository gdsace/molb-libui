import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { Tile, TileGroup, TileTheme } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./tileGroup.stories.scss");
var tileOptions = [
    {
        key: "RESTAURANT",
        icon: "big-icon",
        name: "Restaurant",
        description: "Primarily for sale of food with a refreshment area that prepares and serves food, drink or dessert to customers."
    },
    {
        key: "BAR-PUB-NIGHTCLUB",
        icon: "big-icon",
        name: "Bar/Pub/Nightclub",
        description: "Primarily for sale of alcohol, only providing light cooking."
    },
    {
        key: "FOOD-COURT",
        icon: "big-icon",
        name: "Food Court",
        description: "Primarily for sale of food, single operator etc.",
        error: "XXXXX is not compatible with XXXXXX. Return to the previous step to edit."
    }
];
var selectedTileValue = tileOptions[1];
var creditCarOptions = [
    {
        key: "uniqueNumberIdentifier",
        content: "cardholer name ",
        subContent: "xxxx xxxx xxxx 333",
        description: "Expiry date.",
        imgSrc: "https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox",
        imgAlt: "Visa",
        error: "xxxxx is not compatible with xxxxxx."
    }
];
/**
 * Here define store, we can define our state here.
 */
var store = new Store({
    value: selectedTileValue
});
var valueChangeHandler = function (event) {
    tileOptions.map(function (item) {
        if (item.key === event.target.value) {
            store.set({
                premiseTypeSelected: item,
                showEmptySelectionError: false
            });
        }
    });
};
/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
storiesOf(CategoryName.Tiles, module).addWithJSX("TileGroup", wInfo("")(function () { return (React.createElement("div", { className: styles.rootContainer },
    React.createElement("div", { className: styles.itemsContainer },
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "SmallTile:"),
            React.createElement(State, { store: store },
                React.createElement(TileGroup, { onChange: valueChangeHandler, value: selectedTileValue.key }, tileOptions.map(function (item, index) {
                    return (React.createElement(Tile, { key: index, icon: "store", content: item.name, description: item.description, value: item.key, theme: TileTheme.SmallTile, containerStyle: styles.tileContainerStyle, error: item.error }));
                })))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "BasicTile:"),
            React.createElement(TileGroup, { onChange: valueChangeHandler, value: selectedTileValue.key }, tileOptions.map(function (item, index) {
                return (React.createElement(Tile, { key: index, icon: "store", content: item.name, description: item.description, value: item.key, theme: TileTheme.BasicTile, containerStyle: styles.tileContainerStyle, error: item.error }));
            }))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "MediumTile:"),
            React.createElement(TileGroup, { onChange: valueChangeHandler, value: selectedTileValue.key }, tileOptions.map(function (item, index) {
                return (React.createElement(Tile, { key: index, icon: "store", content: item.name, description: item.description, value: item.key, theme: TileTheme.MediumTile, containerStyle: styles.tileContainerStyle, error: item.error }));
            }))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "LargeTile:"),
            React.createElement(TileGroup, { onChange: valueChangeHandler, value: selectedTileValue.key }, tileOptions.map(function (item, index) {
                return (React.createElement(Tile, { key: index, icon: "store", content: item.name, description: item.description, value: item.key, theme: TileTheme.LargeTile, containerStyle: styles.tileContainerStyle, error: item.error }));
            }))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Unselectable tileGroup:"),
            React.createElement(TileGroup, { onChange: valueChangeHandler, deselectable: true, value: selectedTileValue.key }, tileOptions.map(function (item, index) {
                return (React.createElement(Tile, { key: index, icon: "store", content: item.name, description: item.description, value: item.key, theme: TileTheme.LargeTile, containerStyle: styles.tileContainerStyle, error: item.error }));
            }))),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Image source tileGroup:"),
            React.createElement(TileGroup, { onChange: valueChangeHandler, deselectable: true, value: selectedTileValue.key }, creditCarOptions.map(function (item, index) {
                return (React.createElement(Tile, { key: index, imgSrc: item.imgSrc, imgAlt: item.imgAlt, content: item.content, subContent: item.subContent, description: item.description, value: item.key, theme: TileTheme.MediumTile, containerStyle: styles.tileContainerStyle, error: item.error }));
            })))))); }));
//# sourceMappingURL=TileGroup.stories.js.map