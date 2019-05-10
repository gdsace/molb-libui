import React, { Component } from "react";
interface ISelectProps {
    prefixCls: string;
    options: any[];
    selectedIndex?: number;
    type?: string;
    onSelect: (...args: any[]) => any;
    onMouseEnter?: (...args: any[]) => any;
}
interface ISelectState {
    active: boolean;
}
export declare class Select extends Component<ISelectProps, ISelectState> {
    private readonly saveListRef;
    constructor(props: ISelectProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ISelectProps): void;
    onItemSelect: (event: React.MouseEvent<HTMLLIElement>) => void;
    getOptions(): JSX.Element[];
    scrollToSelected(duration: any): void;
    handleMouseEnter: (e: any) => void;
    handleMouseLeave: () => void;
    render(): JSX.Element | null;
}
export default Select;
