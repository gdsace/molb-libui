import classNames from "classnames";
import * as React from "react";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const style = require("./InlineNotificationWithHeader.scss");

interface IInlineNotificationWithHeaderProps {
  header: string;
  text: string;
  theme: NotificationTheme;
  childNode?: React.ReactNode;
  icon?: string;
}

export const InlineNotificationWithHeader = (
  props: IInlineNotificationWithHeaderProps
) => {
  const { theme, text, childNode } = props;

  const headerStyle = classNames(
    style.inlineNotificationHeader,
    style[`${theme}`],
    {
      [addLocatedErrorClassname("")]: theme === NotificationTheme.Error
    }
  );

  const getIcon = (defaultIcon: string) => props.icon || defaultIcon;

  const iconType = {
    [NotificationTheme.Success]: getIcon("notification-checkmark"),
    [NotificationTheme.Error]: getIcon("notification-error"),
    [NotificationTheme.Warning]: getIcon("warning"),
    [NotificationTheme.SeriousWarning]: getIcon("warning"),
    [NotificationTheme.Informational]: getIcon("informational")
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
      {childNode && childNode}
    </div>
  );
};
