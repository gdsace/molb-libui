import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { Button } from "../../components/button";
import { G2BDatePicker } from "../../components/g2bDatePicker";
import { CategoryName, wInfo } from "../utils";
var store = new Store({
    showError: false,
    selectedDate: null
});
storiesOf(CategoryName.TimePicker, module).addWithJSX("G2BDatePicker", wInfo("")(function () {
    return (React.createElement("div", null,
        React.createElement("div", { style: { display: "inline-block", width: "328px", height: "48px" } },
            React.createElement(State, { store: store },
                React.createElement(G2BDatePicker, { selectedDate: store.get("selectedDate"), onChange: function (date) {
                        return store.set({ selectedDate: date, showError: false });
                    }, dateFormat: "dd/MM/yyyy", placeholderText: "DD/MM/YYYY", showError: store.get("showError"), errorMsg: "this is error Msg." }),
                React.createElement("div", { style: { display: "inline-block", marginTop: "50px" } },
                    React.createElement(Button, { onClick: function () {
                            store.get("selectedDate") !== null
                                ? store.set({ showError: false })
                                : store.set({ showError: true });
                        }, label: "Check" }))))));
}));
//# sourceMappingURL=G2BDatePicker.stories.js.map