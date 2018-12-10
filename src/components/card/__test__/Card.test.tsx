import { Card } from "@libui/components/card/Card";
import { CardTheme, TagTheme } from "@libui/components/EnumValues";
import { Tag } from "@src/components";
import { mount } from "enzyme";
import * as React from "react";

describe("Card", () => {
  const Description = (
    <div>
      All food and beverage establishments must be licenced in order to operate.
      Comply with the Code of Practice of Environmental Health (COPEH), and
      enrol for Food Hygiene training.
    </div>
  );
  const title = "Normal Card without supportingText";
  const subtitle = "JTC Corporation";
  const price = "S$800.00";
  const ActionField = <div>View Details -></div>;

  it("renders ui", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <Card
        title={title}
        subtitle={subtitle}
        description={Description}
        theme={CardTheme.Normal}
        supportingText={price}
        status={"In Processing"}
        actionField={ActionField}
      />
    );
    const titleUi = wrapper.find(".title");
    const actionFieldUi = wrapper.find(".actionField");
    expect(titleUi.text()).toEqual(title);
    expect(actionFieldUi).toHaveLength(1);

    wrapper.find(".card").simulate("click", {});

    expect(onClickMock).not.toBeCalled();
  });

  it("Clickable Card can handle click event ", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <Card
        title={title}
        subtitle={subtitle}
        theme={CardTheme.Clickable}
        onClick={onClickMock}
      />
    );
    wrapper.find(".card").simulate("click", {});

    expect(wrapper.find(Tag)).toHaveLength(0);
    expect(onClickMock).toBeCalled();
  });

  it("should render Tag when have status in props", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <Card
        title={title}
        subtitle={subtitle}
        status={"Pending Payment"}
        statusTheme={TagTheme.Green}
        theme={CardTheme.Clickable}
        onClick={onClickMock}
      />
    );
    expect(wrapper.find(Tag)).toHaveLength(1);
  });
});
