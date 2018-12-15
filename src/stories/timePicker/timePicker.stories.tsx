import moment from "moment";
import React from "react";

import { TimePicker } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const styles = require("./timePicker.stories.scss");

const format = "HH:mm A";
const now = moment()
  .hour(14)
  .minute(30);
const disabledHours = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
};
const generateOptions = (length: any, excludedOptions: any) => {
  const arr = [];
  for (let value = 0; value < length; value++) {
    if (excludedOptions.indexOf(value) < 0) {
      arr.push(value);
    }
  }
  return arr;
};
const disabledMinutes = (h: any) => {
  switch (h) {
    case 9:
      return generateOptions(60, [30]);
    case 21:
      return generateOptions(60, [0]);
    default:
      return generateOptions(60, [0, 23, 30]);
  }
};
const disabledSeconds = (h: any, m: any) => {
  return [h + (m % 60)];
};

const onValueChange = (value: moment.Moment) => {
  return;
};

(storiesOf("Components", module) as any).addWithJSX(
  "TimePicker",
  wInfo(``)(() => {
    return (
      <div className={styles.rootContainer}>
        <div>
          <h6>TimePicker: ...</h6>
        </div>
        <div className={styles.itemsContainer}>
          <div className={styles.box}>
            <p className={styles.notes}>Enabled</p>
            <TimePicker
              showSecond={false}
              defaultValue={moment()}
              className="xxx"
              format={format}
              use12Hours
              inputReadOnly
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Enabled: Small</p>
            <div className={styles.boxSmall}>
              <TimePicker />
            </div>
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Disabled</p>
            <TimePicker
              showSecond={false}
              format="h:mm A"
              use12Hours
              inputReadOnly
              defaultValue={moment("13:30:56", "HH:mm:ss")}
              disabled={true}
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Disabled: Options</p>
            <TimePicker
              showSecond={false}
              defaultValue={now}
              className="xxx"
              onChange={onValueChange}
              disabledHours={disabledHours}
              disabledMinutes={disabledMinutes}
              disabledSeconds={disabledSeconds}
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Selected</p>
            <TimePicker defaultValue={moment("13:30:56", "HH:mm:ss")} />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Hover</p>
            <TimePicker defaultValue={moment("13:30:56", "HH:mm:ss")} />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Validation: with Error</p>
            <TimePicker
              defaultValue={moment("13:30:56", "HH:mm:ss")}
              // showError={true}
              // errorMsg="Some validation message"
            />
          </div>
          <div className={styles.box}>
            <p className={styles.notes}>Focus/Open</p>
            <TimePicker defaultValue={moment("13:30:56", "HH:mm:ss")} />
          </div>
        </div>
      </div>
    );
  })
);
