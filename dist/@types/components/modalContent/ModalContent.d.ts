import * as React from "react";
export interface IModalContentProps {
    header?: string;
    subheader?: string | JSX.Element;
    notification?: string | JSX.Element;
    leftButtonLabel?: string;
    leftButtonOnClick?: any;
    isLeftBtnLoading?: boolean;
    rightButtonLabel?: string;
    rightButtonOnClick?: any;
    isRightBtnLoading?: boolean;
}
export declare class ModalContent extends React.Component<IModalContentProps, {}> {
    render(): JSX.Element;
    private getSubheader;
    private getNotification;
}
