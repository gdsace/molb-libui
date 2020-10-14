/// <reference types="react" />
import { AppAlertAlignmentTheme, AppAlertTheme } from "../../components";
export declare const AppLevelAlert: () => JSX.Element;
declare const _default: {
    title: string;
    component: {
        (props: {
            text: string;
            textToBold?: string | undefined;
            theme: AppAlertTheme;
            alignment?: AppAlertAlignmentTheme | undefined;
            showIcon?: boolean | undefined;
        }): JSX.Element;
        defaultProps: {
            alignment: AppAlertAlignmentTheme;
            showIcon: boolean;
        };
    };
};
export default _default;
