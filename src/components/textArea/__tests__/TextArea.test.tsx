import * as Enzyme from "enzyme";
import * as React from "react";
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
    const span = wrapper.find(".helperMsg").text();
    expect(span).toEqual("help");
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
      isFullyDisplay: true,
      value: "fdsfsdd\nfdsfs\ndfdsfds\nsdfdsfdsfdsf\ndsfdsfs\nsfdsn",
      disabled: true
    };
    document.getElementById = jest
      .spyOn(document, "getElementById")
      .mockReturnValue({ scrollHeight: 32 });

    const wrapper = await Enzyme.mount(<TextArea {...props} />);

    expect(wrapper.find(TextArea).state().height).toEqual(37);
  });
});
