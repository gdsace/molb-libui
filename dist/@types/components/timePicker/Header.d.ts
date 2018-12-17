import moment from "moment";
import React, { Component } from "react";
interface IHeaderProps {
    format: string;
    prefixCls: string;
    disabledDate?: (...args: any[]) => any;
    placeholder?: string;
    clearText?: string;
    value: moment.Moment;
    inputReadOnly?: boolean;
    hourOptions: any[];
    minuteOptions: any[];
    secondOptions: any[];
    disabledHours?: (...args: any[]) => any;
    disabledMinutes?: (...args: any[]) => any;
    disabledSeconds?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    onEsc?: (...args: any[]) => any;
    allowEmpty?: boolean;
    defaultOpenValue?: moment.Moment;
    currentSelectPanel?: string;
    focusOnOpen?: boolean;
    onKeyDown?: (...args: any[]) => any;
    clearIcon?: React.ReactNode;
}
interface IHeaderState {
    str: any;
    invalid: boolean;
}
export declare class Header extends Component<IHeaderProps, IHeaderState> {
    static defaultProps: {
        inputReadOnly: boolean;
    };
    private readonly inputRef;
    constructor(props: IHeaderProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IHeaderProps): void;
    onInputChange: (event: any) => void;
    onKeyDown: (e: any) => void;
    onClear: () => void;
    getClearButton(): JSX.Element | null;
    getProtoValue(): moment.Moment;
    getInput(): JSX.Element;
    render(): JSX.Element;
}
export default Header;
