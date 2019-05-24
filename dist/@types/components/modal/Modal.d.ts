import * as React from "react";
import _ from "lodash";
export declare enum ModalTheme {
    Basic = 0,
    Large = 1,
    Full = 2
}
export interface IModalProps {
    onClose: (event: any) => void;
    show: boolean;
    hideCloseButton?: boolean;
    header?: string;
    children?: React.ReactNode;
    theme?: ModalTheme;
    footer?: React.ReactNode;
    onScrollBottomCallback?: () => any;
}
export declare class Modal extends React.Component<IModalProps, {}> {
    static defaultProps: Partial<IModalProps>;
    debouncedScrollHandler: ((e: any) => void) & _.Cancelable;
    private readonly el;
    private modalRoot;
    private readonly setUpModalContentRef;
    private modalNode;
    private readonly setFooter;
    private footer;
    constructor(props: IModalProps);
    componentWillReceiveProps(nextProps: IModalProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
    private onScrollBottom;
    private onClose;
    private controlBodyScrollable;
    private disableBodyScroll;
    private enableBodyScroll;
    private onClickAway;
    private isClickedElementInModalBox;
    private isClickedOnFloatOrAbsuluteElement;
}
