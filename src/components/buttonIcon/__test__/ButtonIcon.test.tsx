import { shallow } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { ButtonIcon } from "../ButtonIcon";

describe("Button", () => {
  it("renders profile icon", () => {
    const wrapper = shallow(<ButtonIcon type="profile" onClick={noop} />);
    const iconContainer = wrapper.find(Icon);
    expect(iconContainer).toHaveLength(1);
    expect(iconContainer.html()).toContain("#profile");
  });

  it("can click and not click when disabled", () => {
    const callbackFunc = jest.fn();
    const disabledCallbackFunc = jest.fn();
    const wrapper = shallow(<ButtonIcon onClick={callbackFunc} />);
    wrapper.simulate("click");
    expect(callbackFunc).toHaveBeenCalled();
    const disabledWrapper = shallow(
      <ButtonIcon disabled={true} onClick={disabledCallbackFunc} />
    );
    disabledWrapper.simulate("click");
    expect(disabledCallbackFunc).toHaveBeenCalledTimes(0);
  });
});
