import React from "react";

import { storiesOf } from "@storybook/react";

import { AppAlertAlignmentTheme, AppAlertTheme } from "../../components";
import { AppAlert } from "../../components/appAlert";
import { CategoryName, wInfo } from "../utils";

(storiesOf(CategoryName.Notification, module) as any).addWithJSX(
  "App-level Alert",
  wInfo(``)(() => {
    return (
      <div>
        <h1>AppAlert</h1>
        <br />
        <h5>Alignment: left</h5>
        <div>
          <AppAlert
            textStart={"Normal Notification"}
            theme={AppAlertTheme.Informational}
          />
          <AppAlert
            textStart={"Warning Notification"}
            theme={AppAlertTheme.Warning}
          />
          <AppAlert
            textStart={"Error Notification"}
            theme={AppAlertTheme.Error}
          />
          <AppAlert
            textStart={
              "Normal Notification with a very very very very very very very very long text."
            }
            theme={AppAlertTheme.Informational}
          />
          <AppAlert
            textStart={"Warning Notification with a "}
            textMiddle={"bold"}
            textEnd={" text."}
            theme={AppAlertTheme.Warning}
          />
        </div>
        <br />
        <h5>Alignment: center</h5>
        <div>
          <AppAlert
            textStart={"Normal Notification"}
            theme={AppAlertTheme.Informational}
            alignment={AppAlertAlignmentTheme.CENTER}
          />
          <AppAlert
            textStart={"Warning Notification"}
            theme={AppAlertTheme.Warning}
            alignment={AppAlertAlignmentTheme.CENTER}
          />
          <AppAlert
            textStart={"Error Notification"}
            theme={AppAlertTheme.Error}
            alignment={AppAlertAlignmentTheme.CENTER}
          />
          <AppAlert
            textStart={"Normal Notification with a "}
            textMiddle={"very very very very very very very very long"}
            textEnd={" text."}
            theme={AppAlertTheme.Informational}
            alignment={AppAlertAlignmentTheme.CENTER}
          />
        </div>
      </div>
    );
  })
);
