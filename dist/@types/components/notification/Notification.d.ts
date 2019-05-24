import "react-toastify/dist/ReactToastify.css";
import { NotificationTheme } from "../EnumValues";
export { ToastContainer } from "react-toastify";
export interface INotificationProps {
    header: string;
    theme: NotificationTheme;
    text: string;
}
export declare const notification: (option: INotificationProps) => void;
