import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { isEmpty } from "lodash";
import { Button } from "../../components/button";
import { G2BDatePicker } from "../../components/g2bDatePicker";

const styles = require("./g2bDatePicker.stories.scss");

const store = new Store({
  errorMsg: undefined,
  selectedDate: undefined
});

export const _G2BDatePicker = () => (
  <div className={styles.rootContainer}>
    <div>
      <h6>TimePicker: ...</h6>
    </div>
    <div className={styles.itemsContainer}>
      <div className={styles.box}>
        <p className={styles.notes}>Enabled</p>
        <State store={store}>
          <G2BDatePicker
            selectedDate={store.get("selectedDate")}
            onDateChange={(dateString: string) => store.set({ selectedDate: dateString })}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            errorMsg="this is error Msg."
          />
          <br />
          <Button
            onClick={() => {
              !isEmpty(store.get("selectedDate"))
                ? store.set({ errorMsg: undefined })
                : store.set({ errorMsg: "this is error Msg." });
            }}
            label="Check"
          />
        </State>
      </div>
      <div className={styles.box}>
        <p className={styles.notes}>No future date</p>
        <State store={store}>
          <G2BDatePicker
            onChange={(date: Date) => store.set({ selectedDate: date.toDateString() })}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            maxDate={new Date()}
            monthsShown={1}
          />
        </State>
      </div>
    </div>
  </div>
);

export default {
  title: "G2BDatePicker",
  component: G2BDatePicker
};
