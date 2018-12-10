import { H7 } from "@libui/components/h7";
import {
  IOption,
  RadioCardTypeQuestion
} from "@libui/components/radioCardTypeQuestion";
import { Tile } from "@libui/components/tileGroup/tile";
import { shallow } from "enzyme";
import * as React from "react";

describe.only("RadioCardTypeQuestion", () => {
  const mockOptions: IOption[] = [
    {
      label: "label",
      description: "description",
      value: "value"
    },
    {
      label: "label",
      description: "description",
      value: "value"
    }
  ];
  it("should render ui element", () => {
    const wrapper = shallow(
      <RadioCardTypeQuestion
        onChange={jest.fn()}
        options={mockOptions}
        question={"this is question"}
        selectedAnswer={"answer"}
      />
    );
    const header = wrapper.find(H7);
    expect(header).toHaveLength(1);
    const tiles = wrapper.find(Tile);
    expect(tiles).toHaveLength(2);
  });
});
