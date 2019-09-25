import * as React from "react";
import { Theme } from "../EnumValues";
export interface IModalContentProps {
    header?: string;
    subheader?: string | JSX.Element;
    notification?: string | JSX.Element;
    leftButtonLabel?: string;
    leftButtonOnClick?: any;
    isLeftBtnLoading?: boolean;
    leftButtonTheme?: Theme;
    rightButtonLabel?: string;
    rightButtonOnClick?: any;
    isRightBtnLoading?: boolean;
    rightButtonTheme?: Theme;
    isCustomRightBtn?: boolean;
}
export declare class ModalContent extends React.Component<IModalContentProps, {}> {
    render(): JSX.Element;
    private getSubheader;
    private getNotification;
}
