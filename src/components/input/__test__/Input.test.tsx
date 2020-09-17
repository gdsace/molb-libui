import * as Enzyme from "enzyme";
import * as React from "react";
import { InputType } from "../../EnumValues";
import { Icon } from "../../icons";
import { Input } from "../Input";

describe("Input", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return { matches: false };
      })
    });
  });

  it("should call onChange prop", () => {
    const onChangeMock = jest.fn();
    const event = {
      target: { value: "changed" }
    };
    const component = Enzyme.shallow(<Input value="initial" onChange={onChangeMock} />);
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
    const component = Enzyme.shallow(<Input value="initial" onChange={onChangeMock} maxLength={maxLength} />);
    const input = component.find("input");
    input.simulate("change", event);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("should render toolTipsContent as a string when toolTipsContent is string", () => {
    const toolTipsContent =
      "Please follow this general format:\n" +
      "E.g. use '01', it represents '1st floor'. In the same way:\n" +
      "02 = 2nd floor\n" +
      "10 = 10th floor\n" +
      "MEZZ = Mezzanine\n" +
      "RF = Roof\n" +
      "B1 = Basement 1";
    const component = Enzyme.shallow(
      <Input value="initial" onChange={jest.fn()} label="label" showTooltip toolTipsContent={toolTipsContent} />
    );
    const result = component
      .find("Tooltips")
      .dive()
      .find(".toolTipsContent");
    expect(result.text()).toEqual(toolTipsContent);
  });

  it("should render toolTipsContent as a element when toolTipsContent is JSX Element", () => {
    const toolTipsContent = <div>I am a JSX.Element</div>;
    const component = Enzyme.shallow(
      <Input value="initial" onChange={jest.fn()} label="label" showTooltip toolTipsContent={toolTipsContent} />
    );
    const result = component
      .find("Tooltips")
      .dive()
      .find(".toolTipsContent")
      .find("div");
    expect(result.at(1).text()).toEqual("I am a JSX.Element");
  });

  it("should set type attribute to text when type prop is Text", () => {
    const component = Enzyme.shallow(<Input value="initial" onChange={jest.fn()} type={InputType.Text} />);
    expect(component.find("input").prop("type")).toEqual("text");
  });

  it("should set type attribute to email when type prop is Email", () => {
    const component = Enzyme.shallow(<Input value="initial" onChange={jest.fn()} type={InputType.Email} />);
    expect(component.find("input").prop("type")).toEqual("email");
  });

  it("should set type attribute to tel when type prop is PositiveIntegerText", () => {
    const component = Enzyme.shallow(<Input value="initial" onChange={jest.fn()} type={InputType.DigitsOnly} />);
    expect(component.find("input").prop("type")).toEqual("tel");
  });

  it("should set type attribute to text when type prop is not specified", () => {
    const component = Enzyme.shallow(<Input value="initial" onChange={jest.fn()} />);
    expect(component.find("input").prop("type")).toEqual("text");
  });

  it("should set type attribute to text when type prop is specified but not Email or PositiveIntegerText", () => {
    const component = Enzyme.shallow(<Input value="initial" onChange={jest.fn()} type={InputType.DecimalText} />);
    expect(component.find("input").prop("type")).toEqual("text");
  });

  it("should set iconSignifier with props", () => {
    const component = Enzyme.shallow(
      <Input
        value="initial"
        onChange={jest.fn()}
        type={InputType.Number}
        iconSignifier={<Icon size="16" type="search" />}
      />
    );
    expect(component.find(Icon)).toHaveLength(1);
  });
});
