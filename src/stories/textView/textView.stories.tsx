import React from "react";

import { TextView } from "@src/components";
import { mockLongText } from "@src/components/textView/__tests__/mockText";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const textViewStyle = {
  width: 800,
  height: 300
};

const styles = {
  margin: "36px"
};

(storiesOf("Components", module) as any).addWithJSX(
  "TextView",
  wInfo(``)(() => (
    <div>
      <div style={styles}>
        <h6>TextView can render use reactNode</h6>
        <div style={textViewStyle}>
          <TextView>
            <div>
              <p>You can write html here in an easy way</p>
              <p>You can edit styles with textViewStyle if you like</p>
            </div>
          </TextView>
        </div>
      </div>
      <div style={styles}>
        <h6>
          You can pass html into the TextView with props
          shouldRenderWithHTMLString = true
        </h6>
        <div style={textViewStyle}>
          <TextView shouldRenderWithHTMLString={true}>{mockLongText}</TextView>
        </div>
      </div>
      <div style={styles}>
        <h6>when you scoll to the bottom, it will file a action</h6>
        <div style={textViewStyle}>
          <TextView
            shouldRenderWithHTMLString={true}
            callbackAfterReachBottom={action("reach to the bottom")}
          >
            {mockLongText}
          </TextView>
        </div>
      </div>
    </div>
  ))
);
