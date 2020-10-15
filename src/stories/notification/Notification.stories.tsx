import { text } from "@storybook/addon-knobs";
import React from "react";
import { Button, NotificationTheme } from "../../components";
import { notification, ToastContainer } from "../../components/notification";

export const _Notification = () => {
  const option = {
    header: text("header", "Notification header"),
    text: text("text", "Notification text")
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
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          height: "200px",
          justifyContent: "space-around"
        }}
      >
        <Button label={"success"} onClick={() => notification(successOption)} />
        <Button label={"error"} onClick={() => notification(errorOption)} />
        <Button label={"infomational"} onClick={() => notification(infomationalOption)} />
        <Button label={"warning"} onClick={() => notification(warningOption)} />
        <ToastContainer newestOnTop />
      </div>
    </div>
  );
};

export default {
  title: "Notification/Notification",
  component: notification
};
