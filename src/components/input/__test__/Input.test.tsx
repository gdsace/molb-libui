import * as Enzyme from "enzyme";
import * as React from "react";
import { Input } from "../Input";

describe("Input", () => {
  it("should call onChange prop", () => {
    const onChangeMock = jest.fn();
    const event = {
      target: { value: "changed" }
    };
    const component = Enzyme.shallow(
      <Input value="initial" onChange={onChangeMock} />
    );
    const input = component.find("input");
    input.simulate("change", event);
    expect(onChangeMock).toBeCalledWith({
      target: { value: "changed" }
    });
  });

  it("should check maxlength when we have this attr in onChange ", () => {
    const maxLength = 6;
    const onChangeMock = jest.fn();
    const event = {
      target: { value: "12345678" }
    };
    const component = Enzyme.shallow(
      <Input value="initial" onChange={onChangeMock} maxLength={maxLength} />
    );
    const input = component.find("input");
    input.simulate("change", event);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("should render toolTipsContent as a string when toolTipsContent is string", () => {
    const onChangeMock = jest.fn();
    const toolTipsContent =
      "Please follow this general format:\n" +
      "E.g. use '01', it represents '1st floor'. In the same way:\n" +
      "02 = 2nd floor\n" +
      "10 = 10th floor\n" +
      "MEZZ = Mezzanine\n" +
      "RF = Roof\n" +
      "B1 = Basement 1";
    const component = Enzyme.shallow(
      <Input
        value="initial"
        onChange={onChangeMock}
        label={"label"}
        showTooltip={true}
        toolTipsContent={toolTipsContent}
      />
    );
    const result = component
      .find("Tooltips")
      .dive()
      .find(".toolTipsContent");
    expect(result.text()).toEqual(toolTipsContent);
  });

  it("should render toolTipsContent as a element when toolTipsContent is JSX Element", () => {
    const onChangeMock = jest.fn();
    const toolTipsContent = <div>I am a JSX.Element</div>;
    const component = Enzyme.shallow(
      <Input
        value="initial"
        onChange={onChangeMock}
        label={"label"}
        showTooltip={true}
        toolTipsContent={toolTipsContent}
      />
    );
    const result = component
      .find("Tooltips")
      .dive()
      .find(".toolTipsContent")
      .find("div");
    expect(result.at(1).text()).toEqual("I am a JSX.Element");
  });
});
