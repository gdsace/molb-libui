import React from "react";

import { storiesOf } from "@storybook/react";

import {
  Button,
  InlineNotification,
  NotificationTheme
} from "../../components";
import { notification, ToastContainer } from "../../components/notification";
import { wInfo } from "../utils";

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
      <div>
        <h1>Notification</h1>
        <div style={{ padding: "10px" }}>
          <Button
            label={"success"}
            onClick={() => notification(successOption)}
          />
          <Button label={"error"} onClick={() => notification(errorOption)} />
          <Button
            label={"infomational"}
            onClick={() => notification(infomationalOption)}
          />
          <Button
            label={"warning"}
            onClick={() => notification(warningOption)}
          />
          {/* Important: in one page, ToastContainer can only have one component */}
          <ToastContainer newestOnTop />
        </div>
        <h1>InlineNotification</h1>
        <div style={{ padding: "10px" }}>
          <InlineNotification
            text={"Normal Notification"}
            theme={NotificationTheme.Informational}
          />
          <InlineNotification
            text={"Success Notification"}
            theme={NotificationTheme.Success}
          />
          <InlineNotification
            text={"Warning Notification"}
            theme={NotificationTheme.Warning}
          />
          <InlineNotification
            text={"Error Notification"}
            theme={NotificationTheme.Error}
          />
        </div>
      </div>
    );
  })
);
