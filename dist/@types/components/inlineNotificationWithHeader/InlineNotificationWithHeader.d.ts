import * as React from "react";
import { NotificationTheme } from "../EnumValues";
interface IInlineNotificationWithHeaderProps {
    header: string;
    text: string;
    theme: NotificationTheme;
    childNode?: React.ReactNode;
    icon?: string;
}
export declare const InlineNotificationWithHeader: (props: IInlineNotificationWithHeaderProps) => JSX.Element;
export {};
