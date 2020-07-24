import classNames from "classnames";
import * as React from "react";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const style = require("./inlineNotification.scss");

type InlineNotificationProps = {
  text: string;
  theme: NotificationTheme;
};

export const InlineNotification = (props: InlineNotificationProps) => {
  const { theme, text } = props;

  const iconType = {
    [NotificationTheme.Success]: "notification-checkmark",
    [NotificationTheme.Error]: "notification-error",
    [NotificationTheme.Warning]: "warning",
    [NotificationTheme.SeriousWarning]: "warning",
    [NotificationTheme.Informational]: "informational"
  };

  const inlineNotificationClassName = classNames(
    style.inlineNotification,
    style[`${theme}`],
    {
      [addLocatedErrorClassname("")]: theme === NotificationTheme.Error
    }
  );

  const processedText = text.split("\n").map((str, index) => (
    <React.Fragment key={`inline-notif-text-chunk-${index}`}>
      {str}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={inlineNotificationClassName} data-scrollpoint>
      <div className={style.inlineNotificationIcon}>
        <Icon type={iconType[theme]} size="20" />
      </div>
      <p className={style.inlineNotificationText}>{processedText}</p>
    </div>
  );
};
