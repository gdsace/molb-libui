import classNames from "classnames";
import * as React from "react";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const style = require("./inlineNotification.scss");

interface IInlineNotificationProps {
  text: string;
  theme: NotificationTheme;
}

export const InlineNotification = (props: IInlineNotificationProps) => {
  const { theme, text } = props;

  const iconType = {
    [NotificationTheme.Success]: "notification-checkmark",
    [NotificationTheme.Error]: "notification-error",
    [NotificationTheme.Warning]: "warning",
    [NotificationTheme.Informational]: "informational"
  };

  const inlineNotificationClassName = classNames(
    style.inlineNotification,
    style[`${theme}`],
    {
      [addLocatedErrorClassname("")]: theme === NotificationTheme.Error
    }
  );

  return (
    <div className={inlineNotificationClassName} data-scrollpoint>
      <div className={style.inlineNotificationIcon}>
        <Icon type={iconType[theme]} size="24" />
      </div>
      <p className={style.inlineNotificationText}>{text}</p>
    </div>
  );
};
