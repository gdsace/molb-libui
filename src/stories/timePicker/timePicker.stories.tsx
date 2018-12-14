import moment from "moment";
import React from "react";

import { TimePicker } from "@src/components/timePicker";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const styles = require("./timePicker.stories.scss");

(storiesOf("Components", module) as any).addWithJSX(
  "TimePicker",
  wInfo(``)(() => {
    return (
      <div className={styles.rootContainer}>
        <div>
          <h6>TimePicker can render use reactNode</h6>
        </div>
        <div className={styles.itemsContainer}>
          <div className={styles.box}>
            <p className={styles.notes}>Enabled</p>
            <TimePicker title="Time Picker Label" />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Enabled: Small</p>
            <div className={styles.boxSmall}>
              <TimePicker title="Small Label" />
            </div>
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Disabled</p>
            <TimePicker
              defaultValue={moment("13:30:56", "HH:mm:ss")}
              title="Time Picker Label"
              disabled={true}
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Selected</p>
            <TimePicker
              defaultValue={moment("13:30:56", "HH:mm:ss")}
              title="Time Picker Label"
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Hover</p>
            <TimePicker
              defaultValue={moment("13:30:56", "HH:mm:ss")}
              title="Time Picker Label"
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Validation: with Error</p>
            <TimePicker
              defaultValue={moment("13:30:56", "HH:mm:ss")}
              title="Time Picker Label"
              showError={true}
              errorMsg="Some validation message"
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Focus/Open</p>
            <TimePicker
              defaultValue={moment("13:30:56", "HH:mm:ss")}
              title="Time Picker Label"
            />
          </div>
        </div>
      </div>
    );
  })
);
