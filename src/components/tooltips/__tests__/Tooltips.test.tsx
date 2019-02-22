import { shallow } from "enzyme";
import * as React from "react";
import Popup from "reactjs-popup";
import { TooltipsLocationTheme } from "../../EnumValues";
import { Icon, Link } from "../../index";
import { Tooltips } from "../Tooltips";

describe("Tooltips", () => {
  it("render ui", () => {
    const wrapper = shallow(
      <Tooltips trigger={<div />} position={TooltipsLocationTheme.BottomLeft}>
        <div>test </div>
      </Tooltips>
    );
    const popup = wrapper.find(Popup);
    expect(popup).toHaveLength(1);
  });

  it("render link button ui", () => {
    const wrapper = shallow(
      <Tooltips
        trigger={<Icon type={"help"} />}
        position={TooltipsLocationTheme.BottomRight}
        width={240}
        linkLabel={"Link Button"}
        linkUrl={"http://www.baidu.com"}
      >
        <div>Tooltip Label</div>
      </Tooltips>
    );
    const link = wrapper.find(Link);
    expect(link).toHaveLength(1);
  });
});
