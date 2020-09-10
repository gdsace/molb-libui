import { mount } from "enzyme";
import * as React from "react";
import { TextView } from "../TextView";

const textMockNode = <div className="textMock">test</div>;
const textMockString = '<div class="test">test</div>';
describe("TextView", () => {
  it("renders the UI Component", () => {
    const wrapper = mount(<TextView>{textMockNode}</TextView>);
    const textChildren = wrapper.find(".textarea");
    expect(textChildren).toHaveLength(1);
  });

  // because this component render with dangerouslySetInnerHTML
  // the test process will be little different.
  it("renders the children node", () => {
    const wrapper = mount(<TextView>{textMockNode}</TextView>);
    expect(wrapper.html()).toContain(`<div class=\"textMock\">test</div>`);
  });

  it("renders the children string", () => {
    const wrapper = mount(<TextView shouldRenderWithHTMLString={true}>{textMockString}</TextView>);
    expect(wrapper.html()).toContain(textMockString);
  });
});
