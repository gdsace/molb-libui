import * as React from "react";
export declare enum ModalTheme {
    BASIC = 0,
    Large = 1
}
export interface IModalProps {
    onClose: () => void;
    show: boolean;
    header?: string;
    children?: React.ReactNode;
    theme?: ModalTheme;
}
export declare class Modal extends React.Component<IModalProps, {}> {
    static defaultProps: Partial<IModalProps>;
    private readonly el;
    private modalRoot;
    private readonly setUpModalContentRef;
    private modalNode;
    constructor(props: IModalProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
    private onClickAway;
}
