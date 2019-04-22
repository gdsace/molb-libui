import classNames from "classnames";
import * as React from "react";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const style = require("./InlineNotifWithHeader.scss");

interface IInlineNotifWithHeaderProps {
  header: string;
  text: string;
  theme: NotificationTheme;
}

export const InlineNotifWithHeader = (props: IInlineNotifWithHeaderProps) => {
  const { theme, text } = props;

  const headerStyle = classNames(
    style.inlineNotificationHeader,
    style[`${theme}`],
    {
      [addLocatedErrorClassname("")]: theme === NotificationTheme.Error
    }
  );

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
      <div className={style.content}>
        <h5 className={headerStyle}>{props.header}</h5>
        <p className={style.inlineNotificationText}>{text}</p>
      </div>
    </div>
  );
};
