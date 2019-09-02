import classnames from "classnames";
import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { forPhoneOnlyMediaQuery } from "../utils";

export { ToastContainer } from "react-toastify";

const styles = require("./notification.scss");

export interface INotificationProps {
  header: string;
  theme: NotificationTheme;
  text: string;
}

// if we need to custom the close button, we have to pass
// a component with a closeToast function, which provided
// by the react-toastify library. so we will miss closeToast
// in the closebutton props check. So use ts-ignore.
// @ts-ignore
const CloseButton = ({ closeToast }) => {
  return (
    <div onClick={closeToast} className={styles.close}>
      <Icon type="close" size={"16"} />
    </div>
  );
};

const getContent = (
  header: string,
  text: string,
  theme: NotificationTheme
): React.ReactElement<any> => {
  const notificationContentContainerClassname = classnames(
    styles.notificationContentContainer,
    styles[`${theme}`]
  );

  const iconType = {
    [NotificationTheme.Success]: "notification-checkmark",
    [NotificationTheme.Error]: "notification-error",
    [NotificationTheme.Warning]: "warning",
    [NotificationTheme.SeriousWarning]: "warning",
    [NotificationTheme.Informational]: "informational"
  };

  return (
    <div className={notificationContentContainerClassname}>
      <div className={styles.iconContainer}>
        <Icon type={iconType[theme]} />
      </div>
      <div className={styles.contentContainer}>
        <header className={styles.title}>{header}</header>
        <span className={styles.description}>{text}</span>
      </div>
    </div>
  );
};

export const notification = (option: INotificationProps) => {
  const content = getContent(option.header, option.text, option.theme);
  const toastContainerClassname = classnames(
    styles.toastContainer,
    styles[`${option.theme}`]
  );
  const responsiveForMobile = forPhoneOnlyMediaQuery();

  const position = responsiveForMobile ? "top-center" : "top-right";
  toast(content, {
    hideProgressBar: true,
    closeOnClick: false,
    position,
    pauseOnHover: true,
    draggable: true,
    autoClose: 5000,
    className: toastContainerClassname,
    // the same reason with above.
    // @ts-ignore
    closeButton: <CloseButton />
  });
};
