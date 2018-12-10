import * as React from "react";
export interface IModalContentProps {
    header?: string;
    subheader?: string;
    leftButtonLabel?: string;
    leftButtonOnClick?: any;
    rightButtonLabel?: string;
    rightButtonOnClick?: any;
}
export declare class ModalContent extends React.Component<IModalContentProps, {}> {
    render(): JSX.Element;
}
