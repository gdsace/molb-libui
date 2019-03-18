import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import { Indicator, Sidebar } from "../../components";
import { CategoryName, wInfo } from "../utils";
var store1 = new Store({
    activeIndex: 1
});
var store2 = new Store({
    activeIndex: 1
});
var onSidebarItemClick = function (value) {
    store2.set({ activeIndex: value + 1 });
};
var indicatorList1 = [
    {
        title: (React.createElement(State, { store: store1 },
            React.createElement(Indicator, { activeIndex: store1.activeIndex, index: 1, label: "Label 1" })))
    },
    {
        title: (React.createElement(State, { store: store1 },
            React.createElement(Indicator, { activeIndex: store1.activeIndex, index: 2, label: "Label 2" })))
    },
    {
        title: (React.createElement(State, { store: store1 },
            React.createElement(Indicator, { activeIndex: store1.activeIndex, index: 3, label: "Label 3" })))
    }
];
var indicatorList2 = [
    {
        title: (React.createElement(State, { store: store2 },
            React.createElement(Indicator, { activeIndex: store2.activeIndex, index: 1, label: "Label 1" })))
    },
    {
        title: (React.createElement(State, { store: store2 },
            React.createElement(Indicator, { activeIndex: store2.activeIndex, index: 2, label: "Label 2" })))
    },
    {
        title: (React.createElement(State, { store: store2 },
            React.createElement(Indicator, { activeIndex: store2.activeIndex, index: 3, label: "Label 3" })))
    }
];
storiesOf(CategoryName.Others, module).addWithJSX("Sidebar", wInfo("")(function () { return (React.createElement("div", { style: { padding: "10px" } },
    React.createElement("h6", { style: { color: "grey" } }, "This is indicator Sidebar"),
    React.createElement(State, { store: store1 },
        React.createElement(Sidebar, { list: indicatorList1, type: "indicator", selectedIndex: store1.activeIndex - 1 })),
    React.createElement("br", null),
    React.createElement("h6", { style: { color: "grey" } }, "This is menu Sidebar"),
    React.createElement(State, { store: store2 },
        React.createElement(Sidebar, { list: indicatorList2, type: "menu", onItemClick: onSidebarItemClick, selectedIndex: store1.activeIndex - 1 })))); }));
//# sourceMappingURL=Sidebar.stories.js.map