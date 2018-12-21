import React from "react";

import { Icon, Tooltips, TooltipsLocationTheme } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const rowStyles = {
  padding: "20px 0",
  marginRight: "10px",
  display: "flex",
  justifyContent: "center"
};

(storiesOf("Components", module) as any).addWithJSX(
  "Tooltips",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      Tooltips Themes
      <br />
      <div style={rowStyles}>
        <Tooltips
          trigger={<Icon type={"help"} />}
          position={TooltipsLocationTheme.BottomLeft}
          specializedPosition={true}
        >
          <div>
            When use specializedPosition, component will just the arrow position
          </div>
        </Tooltips>
      </div>
      <div style={rowStyles}>
        <Tooltips
          trigger={<Icon type={"help"} />}
          position={TooltipsLocationTheme.BottomCenter}
          specializedPosition={true}
        >
          <div>center position won't change</div>
        </Tooltips>
      </div>
      <div style={rowStyles}>
        <Tooltips
          trigger={<Icon type={"help"} />}
          position={TooltipsLocationTheme.BottomRight}
          specializedPosition={true}
        >
          <div>
            When use specializedPosition, component will just the arrow position
          </div>
        </Tooltips>
      </div>
      <div style={rowStyles}>
        <Tooltips
          trigger={<Icon type={"payment"} />}
          position={TooltipsLocationTheme.BottomLeft}
          width={250}
          height={128}
        >
          <div>You can custom the height and width with props</div>
        </Tooltips>
      </div>
      <div style={rowStyles}>
        <Tooltips
          trigger={<Icon type={"help"} />}
          position={TooltipsLocationTheme.BottomRight}
          width={240}
          linkLabel={"Link Button"}
          linkUrl={"http://www.baidu.com"}
        >
          <div>Tooltip Label</div>
        </Tooltips>
      </div>
    </div>
  ))
);
