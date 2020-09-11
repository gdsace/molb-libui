import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { isEmpty } from "lodash";
import { Button } from "../../components/button";
import { G2BDatePicker } from "../../components/g2bDatePicker";
import { CategoryName, wInfo } from "../utils";
var styles = require("./g2bDatePicker.stories.scss");
var store = new Store({
    errorMsg: undefined,
    selectedDate: undefined
});
storiesOf(CategoryName.DatePicker, module).addWithJSX("G2BDatePicker", wInfo("")(function () {
    return (React.createElement("div", { className: styles.rootContainer },
        React.createElement("div", null,
            React.createElement("h6", null, "TimePicker: ...")),
        React.createElement("div", { className: styles.itemsContainer },
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "Enabled"),
                React.createElement(State, { store: store },
                    React.createElement(G2BDatePicker, { selectedDate: store.get("selectedDate"), onDateChange: function (dateString) {
                            return store.set({ selectedDate: dateString });
                        }, dateFormat: "dd/MM/yyyy", placeholderText: "DD/MM/YYYY", errorMsg: "this is error Msg." }),
                    React.createElement("br", null),
                    React.createElement(Button, { onClick: function () {
                            !isEmpty(store.get("selectedDate"))
                                ? store.set({ errorMsg: undefined })
                                : store.set({ errorMsg: "this is error Msg." });
                        }, label: "Check" }))),
            React.createElement("div", { className: styles.box },
                React.createElement("p", { className: styles.notes }, "No future date"),
                React.createElement(State, { store: store },
                    React.createElement(G2BDatePicker, { onChange: function (date) {
                            return store.set({ selectedDate: date.toDateString() });
                        }, dateFormat: "dd/MM/yyyy", placeholderText: "DD/MM/YYYY", maxDate: new Date(), monthsShown: 1 }))))));
}));
//# sourceMappingURL=G2BDatePicker.stories.js.map