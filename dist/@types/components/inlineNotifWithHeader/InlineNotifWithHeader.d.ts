/// <reference types="react" />
import { NotificationTheme } from "../EnumValues";
interface IInlineNotifWithHeaderProps {
    header: string;
    text: string;
    theme: NotificationTheme;
}
export declare const InlineNotifWithHeader: (props: IInlineNotifWithHeaderProps) => JSX.Element;
export {};
