import * as React from "react";
import { Theme } from "../EnumValues";
export interface IModalContentProps {
    header?: string;
    subheader?: string | JSX.Element;
    notification?: string | JSX.Element;
    leftButtonDisabled?: boolean;
    leftButtonLabel?: string;
    leftButtonOnClick?: any;
    isLeftBtnLoading?: boolean;
    leftButtonTheme?: Theme;
    rightButtonDisabled?: boolean;
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
