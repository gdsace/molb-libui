import { shallow } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { IconButton } from "../IconButton";

describe("IconButton", () => {
  it("renders profile icon", () => {
    const wrapper = shallow(<IconButton type="profile" onClick={noop} />);
    const iconContainer = wrapper.find(Icon);
    expect(iconContainer).toHaveLength(1);
    expect(iconContainer.html()).toContain("#profile");
  });

  it("can click and not click when disabled", () => {
    const callbackFunc = jest.fn();
    const disabledCallbackFunc = jest.fn();
    const wrapper = shallow(<IconButton onClick={callbackFunc} />);
    wrapper.simulate("click");
    expect(callbackFunc).toHaveBeenCalled();
    const disabledWrapper = shallow(<IconButton disabled={true} onClick={disabledCallbackFunc} />);
    disabledWrapper.simulate("click");
    expect(disabledCallbackFunc).toHaveBeenCalledTimes(0);
  });
});
