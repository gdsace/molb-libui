import "react-toastify/dist/ReactToastify.css";
import { NotificationTheme } from "../EnumValues";
export declare type NotificationProps = {
    header: string;
    text: string;
    theme: NotificationTheme;
};
export declare const notification: (options: NotificationProps) => void;
