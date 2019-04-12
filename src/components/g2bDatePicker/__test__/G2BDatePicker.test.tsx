import { shallow } from "enzyme";
import * as React from "react";
import DatePicker from "react-datepicker";
import { G2BDatePicker, IG2BDatePickerProps } from "../G2BDatePicker";

describe("G2BDatePicker", () => {
  let props: IG2BDatePickerProps;
  beforeEach(() => {
    props = {
      selectedDate: null,
      onChange: jest.fn(),
      placeholderText: "this is place holder",
      dateFormat: "DD/MM/YYYY",
      showError: false,
      errorMsg: undefined
    };
  });
  it("render DatePicker", () => {
    const wrapper = shallow(<G2BDatePicker {...props} />);
    const datePicker = wrapper.find(DatePicker);
    expect(datePicker).toHaveLength(1);
  });

  it("should render errorMsg when showError is true", () => {
    props.showError = true;
    props.errorMsg = "this is error msg.";
    const wrapper = shallow(<G2BDatePicker {...props} />);
    const errorMsg = wrapper.find(".errorMsg");
    expect(errorMsg).toHaveLength(1);
    expect(errorMsg.text()).toEqual("this is error msg.");
  });
});
