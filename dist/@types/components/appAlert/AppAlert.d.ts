/// <reference types="react" />
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
declare type AppAlertProps = {
    text: string;
    textToBold?: string;
    theme: AppAlertTheme;
    alignment?: AppAlertAlignmentTheme;
    showIcon?: boolean;
};
export declare const AppAlert: {
    (props: AppAlertProps): JSX.Element;
    defaultProps: {
        alignment: AppAlertAlignmentTheme;
        showIcon: boolean;
    };
};
export {};
