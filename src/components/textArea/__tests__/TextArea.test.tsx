import * as Enzyme from "enzyme";
import * as React from "react";
import { Icon } from "../../icons";
import { TextArea } from "../TextArea";

describe("TextArea", () => {
  it("should show title", () => {
    const wrapper = Enzyme.shallow(<TextArea title="Lable" />);
    const lable = wrapper
      .find("label")
      .at(0)
      .text();
    expect(lable).toEqual("Lable");
  });

  it("should show helperText", () => {
    const wrapper = Enzyme.shallow(<TextArea helperText="help" />);
    const span = wrapper.find("p").text();

    expect(span).toEqual("help");
    expect(wrapper.find(".helperMsg").length).toEqual(1);
  });

  it("should show warning message when there is no error", () => {
    const wrapper = Enzyme.shallow(<TextArea helperText="help" warningMsg="this is warning" />);

    expect(wrapper.find(".warningMsg").length).toEqual(1);
    expect(wrapper.find(".warningMsg").text()).toEqual("this is warning");
  });

  it("should show warning message which is react node when there is no error", () => {
    const warningMsgWithIcon = (
      <>
        <Icon type="alert" size="12" />
        <p>this is warning</p>
      </>
    );
    const wrapper = Enzyme.shallow(<TextArea helperText="help" warningMsg={warningMsgWithIcon} />);

    expect(wrapper.find(Icon).length).toEqual(1);
    expect(wrapper.find(".warningMsg").length).toEqual(1);
    expect(wrapper.find("p").text()).toEqual("this is warning");
  });

  it("should display error message when show error is true", () => {
    const wrapper = Enzyme.shallow(
      <TextArea showError helperText="help" warningMsg="this is warning" errorMsg="error" />
    );
    expect(wrapper.find(".locatedError").text()).toEqual("error");
  });

  it("should show maxlength", () => {
    const wrapper = Enzyme.shallow(<TextArea maxLength={10} />);
    const span = wrapper.find(".countMsg").text();
    expect(span).toEqual("0/10");
  });

  it("should update the height to contain all content with out scroll bar", async () => {
    const props = {
      title: "Description",
      id: "test",
      displayContentWithoutScroll: true,
      value: "fdsfsdd\nfdsfs\ndfdsfds\nsdfdsfdsfdsf\ndsfdsfs\nsfdsn",
      disabled: true
    };
    document.getElementById = jest.spyOn(document, "getElementById").mockReturnValue({ scrollHeight: 32 });

    const wrapper = await Enzyme.mount(<TextArea {...props} />);

    expect(wrapper.find(TextArea).state().height).toEqual(37);
  });
});
