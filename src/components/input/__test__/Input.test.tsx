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

  it("should render toolTipsContent with line break", () => {
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
      .find(".toolTipsContent")
      .find("p");
    expect(result).toHaveLength(7);
    expect(result.at(0).text()).toEqual("Please follow this general format:");
    expect(result.at(1).text()).toEqual(
      "E.g. use '01', it represents '1st floor'. In the same way:"
    );
    expect(result.at(2).text()).toEqual("02 = 2nd floor");
    expect(result.at(3).text()).toEqual("10 = 10th floor");
    expect(result.at(4).text()).toEqual("MEZZ = Mezzanine");
    expect(result.at(5).text()).toEqual("RF = Roof");
    expect(result.at(6).text()).toEqual("B1 = Basement 1");
  });
});
