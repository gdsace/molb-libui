import * as React from "react";
export declare enum ModalTheme {
    Basic = 0,
    Large = 1,
    Full = 2
}
export interface IModalProps {
    onClose: () => void;
    show: boolean;
    header?: string;
    children?: React.ReactNode;
    theme?: ModalTheme;
    footer?: React.ReactNode;
}
export declare class Modal extends React.Component<IModalProps, {}> {
    static defaultProps: Partial<IModalProps>;
    private readonly el;
    private modalRoot;
    private readonly setUpModalContentRef;
    private modalNode;
    private readonly setFooter;
    private footer;
    constructor(props: IModalProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
    private onClickAway;
}
