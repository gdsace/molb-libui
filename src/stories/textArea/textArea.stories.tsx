import React from "react";

import { storiesOf } from "@storybook/react";
import { Icon, TextArea } from "../../components";
import { CategoryName } from "../utils";

const styles = require("./textArea.stories.scss");

storiesOf(CategoryName.TextFields, module).add("TextArea", () => {
  const warningMsgWithIcon = (
    <>
      <Icon type="alert" size="12" />
      <p>{"warning with Icon"}</p>
    </>
  );
  return (
    <div className={styles.rootContainer}>
      <div>
        <h6>TextArea: ...</h6>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>Enabled: White/Grey background</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>show warning message</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
            warningMsg="warning message"
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>show warning message with icon</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
            warningMsg={warningMsgWithIcon}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Disabled: display all content without scroll bar</p>
          <TextArea
            title="Description"
            id={"test"}
            displayContentWithoutScroll={true}
            value={"fdsfsdd\nfdsfs\ndfdsfds\nsdfdsfdsfdsf\ndsfdsfs\nsfdsn"}
            maxLength={300}
            disabled={true}
            overwrite={true}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Enabled: With Icon</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
            iconType="help"
            helperText="Some helper text"
            errorMsg="Please reduce the number of characters"
            value={"First line\nSecond line"}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Enabled: Filled</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
            iconType="help"
            helperText="Some helper text"
            errorMsg="Please reduce the number of characters"
            value={"First line\nSecond line"}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Disabled:</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
            iconType="help"
            disabled={true}
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            errorMsg="Please reduce the number of characters"
            value={"First line\nSecond line"}
          />
          <p className={styles.content}>Other following contents (Input error msg should float on this)</p>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Disabled: shown placeholder</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
            iconType="help"
            disabled={true}
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            errorMsg="Please reduce the number of characters"
          />
          <p className={styles.content}>Other following contents (Input error msg should float on this)</p>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Validation Error:</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
            iconType="help"
            helperText="Some helper text"
            errorMsg="Please reduce the number of characters"
            showError={true}
            value={"First line\nSecond line"}
          />
          <p className={styles.content}>Other following contents (Input error msg should float on this)</p>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>className: control textarea input by class</p>
          <TextArea
            title="Description"
            placeholder="What is your brand concept? What kind of food do you sell?"
            maxLength={300}
            overwrite={true}
            className={styles.textareaClass}
          />
        </div>
      </div>
    </div>
  );
});
