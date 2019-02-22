import { shallow } from "enzyme";
import * as React from "react";
import { ListcardStatus } from "../../EnumValues";
import { Listcard } from "../Listcard";

describe("Input", () => {
  it("renders ui", () => {
    const onClickMock = jest.fn();
    const titleText = "Petroleum and Flammable Material Storage Licence";
    const subTitleText = "subTitleText";
    const wrapper = shallow(
      <Listcard
        title={titleText}
        subTitle={subTitleText}
        description="Singapore Civil Defence Force (SCDF)"
        tag="Expires on 8 Oct 2018"
        supportingText="S$200.00~500.00"
        buttonText="Action Button"
        status={ListcardStatus.Warning}
        onButtonClick={onClickMock}
      />
    );
    const title = wrapper.find(".title");
    const subTitle = wrapper.find(".subTitle");
    expect(title.text()).toEqual(titleText);
    expect(subTitle.text()).toEqual(subTitleText);
  });
});
