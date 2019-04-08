import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { Button } from "../../components/button";
import { G2BDatePicker } from "../../components/g2bDatePicker";
import { CategoryName, wInfo } from "../utils";

const store = new Store({
  showError: false,
  selectedDate: null
});

(storiesOf(CategoryName.SelectionControls, module) as any).addWithJSX(
  "G2BDatePicker",
  wInfo(``)(() => {
    return (
      <div>
        <div style={{ display: "inline-block" }}>
          <State store={store}>
            <G2BDatePicker
              selectedDate={store.get("selectedDate")}
              onChange={(date: Date | null) =>
                store.set({ selectedDate: date, showError: false })
              }
              dateFormat="dd/MM/yyyy"
              placeholderText={"DD/MM/YYYY"}
              showError={store.get("showError")}
              errorMsg="this is error Msg."
            />
            <div style={{ display: "inline-block", marginTop: "50px" }}>
              <Button
                onClick={() => {
                  store.get("selectedDate") !== null
                    ? store.set({ showError: false })
                    : store.set({ showError: true });
                }}
                label="Check"
              />
            </div>
          </State>
        </div>
      </div>
    );
  })
);
