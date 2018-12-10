import React from "react";

import { wInfo } from "../utils";
import { notification, ToastContainer } from "../../components/notification";
import { storiesOf } from "@storybook/react";
import { Button } from "@src/components";
import { NotificationTheme } from "@src/components/EnumValues";

(storiesOf("Components", module) as any).addWithJSX(
  "Notification",
  wInfo(``)(() => {
    const option = {
      header: "Notification header",
      text: "Notification text"
    };

    const successOption = {
      ...option,
      theme: NotificationTheme.Success
    };
    const errorOption = {
      ...option,
      theme: NotificationTheme.Error
    };
    const infomationalOption = {
      ...option,
      theme: NotificationTheme.Informational
    };
    const warningOption = {
      ...option,
      theme: NotificationTheme.Warning
    };

    return (
      <div style={{ padding: "10px" }}>
        <Button label={"success"} onClick={() => notification(successOption)} />
        <Button label={"error"} onClick={() => notification(errorOption)} />
        <Button
          label={"infomational"}
          onClick={() => notification(infomationalOption)}
        />
        <Button label={"warning"} onClick={() => notification(warningOption)} />
        {/* Important: in one page, ToastContainer can only have one component */}
        <ToastContainer newestOnTop />
      </div>
    );
  })
);
