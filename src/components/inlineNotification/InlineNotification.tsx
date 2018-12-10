import classNames from "classnames";
import * as React from "react";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const style = require("./inlineNotification.scss");

interface IInlineNotificationProps {
  text: string;
  type: string;
}

export const InlineNotification = (props: IInlineNotificationProps) => {
  const typeClass = {
    [style.error]: props.type === "error",
    [style.warning]: props.type === "warning"
  };
  const iconClassName = classNames(style.inlineNotificationIcon, typeClass);

  const inlineNotificationClassName = classNames(
    style.inlineNotification,
    typeClass,
    {
      [addLocatedErrorClassname("")]: props.type === "error"
    }
  );

  return (
    <div className={inlineNotificationClassName} data-scrollpoint={true}>
      <div className={iconClassName}>
        <Icon type="alert" size="24" />
      </div>
      <p className={style.inlineNotificationText}>{props.text}</p>
    </div>
  );
};
