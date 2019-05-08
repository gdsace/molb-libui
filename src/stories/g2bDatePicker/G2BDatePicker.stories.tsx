import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import { isEmpty } from "lodash";
import { Button } from "../../components/button";
import { G2BDatePicker } from "../../components/g2bDatePicker";
import { CategoryName, wInfo } from "../utils";

const store = new Store({
  errorMsg: undefined,
  selectedDate: undefined
});

(storiesOf(CategoryName.TimePicker, module) as any).addWithJSX(
  "G2BDatePicker",
  wInfo(``)(() => {
    return (
      <div>
        <div
          style={{ display: "inline-block", width: "328px", height: "48px" }}
        >
          <State store={store}>
            <G2BDatePicker
              selectedDate={store.get("selectedDate")}
              onChange={(dateString: string) =>
                store.set({ selectedDate: dateString })
              }
              dateFormat="dd/MM/yyyy"
              placeholderText={"DD/MM/YYYY"}
              errorMsg="this is error Msg."
            />
            <div style={{ display: "inline-block", marginTop: "50px" }}>
              <Button
                onClick={() => {
                  !isEmpty(store.get("selectedDate"))
                    ? store.set({ errorMsg: undefined })
                    : store.set({ errorMsg: "this is error Msg." });
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
