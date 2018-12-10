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
});
