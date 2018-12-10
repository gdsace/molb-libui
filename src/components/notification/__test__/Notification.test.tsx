import * as React from "react";

import { Button } from "@libui/components/button";
import { NotificationTheme } from "@libui/components/EnumValues";
import { shallow } from "enzyme";
import { ToastContainer } from "react-toastify";
import { notification } from "../Notification";

describe("Notification", () => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches: true
  });

  it("renders the children component", () => {
    const successOption = {
      header: "Notification header",
      text: "Notification text",
      theme: NotificationTheme.Success
    };
    const wrapper = shallow(
      <div>
        <Button label={"success"} onClick={() => notification(successOption)} />
        <ToastContainer />
      </div>
    );
    const button = wrapper.find(Button);
    const toastContainer = wrapper.find(ToastContainer);
    expect(button).toHaveLength(1);
    expect(toastContainer).toHaveLength(1);
  });
});
