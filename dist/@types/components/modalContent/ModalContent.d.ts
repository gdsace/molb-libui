import * as React from "react";
export interface IModalContentProps {
    header?: string;
    subheader?: string | JSX.Element;
    leftButtonLabel?: string;
    leftButtonOnClick?: any;
    rightButtonLabel?: string;
    rightButtonOnClick?: any;
}
export declare class ModalContent extends React.Component<IModalContentProps, {}> {
    render(): JSX.Element;
    private getSubheader;
    private leftButtonOnClick;
    private rightButtonOnClick;
}
