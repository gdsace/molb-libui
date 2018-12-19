import React from "react";

import { TextArea } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const textAreaStyle = {
  width: 800,
  height: 300
};

const styles = {
  margin: "36px"
};

(storiesOf("Components", module) as any).addWithJSX(
  "TextArea",
  wInfo(``)(() => {
    return (
      <div>
        <div style={styles}>
          <h6>TextArea can render use reactNode</h6>
          <div style={textAreaStyle}>
            <TextArea
              title="Description"
              placeholder="What is your brand concept? What kind of food do you sell?"
              maxLength={300}
              overwrite={true}
              errorMsg="Please reduce the number of characters"
            />
          </div>
        </div>
      </div>
    );
  })
);
