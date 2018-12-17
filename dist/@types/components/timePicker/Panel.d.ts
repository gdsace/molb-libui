import moment from "moment";
import React, { Component } from "react";
declare function noop(): void;
interface IPanelProps {
    clearText?: string;
    prefixCls: string;
    className?: string;
    defaultOpenValue?: moment.Moment;
    value: moment.Moment;
    placeholder?: string;
    format: string;
    inputReadOnly?: boolean;
    disabledHours: (...args: any[]) => any;
    disabledMinutes: (...args: any[]) => any;
    disabledSeconds: (...args: any[]) => any;
    hideDisabledOptions: boolean;
    onChange?: (...args: any[]) => any;
    onEsc?: (...args: any[]) => any;
    allowEmpty?: boolean;
    showHour?: boolean;
    showMinute?: boolean;
    showSecond?: boolean;
    onClear?: (...args: any[]) => any;
    use12Hours?: boolean;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    addon?: (...args: any[]) => any;
    focusOnOpen?: boolean;
    onKeyDown?: (...args: any[]) => any;
    clearIcon?: React.ReactNode;
    showHeader?: boolean;
}
interface IPanelState {
    value: moment.Moment;
    currentSelectPanel: string;
    selectionRange: undefined[];
}
export declare class Panel extends Component<IPanelProps, IPanelState> {
    static defaultProps: {
        prefixCls: string;
        onChange: typeof noop;
        onClear: typeof noop;
        disabledHours: typeof noop;
        disabledMinutes: typeof noop;
        disabledSeconds: typeof noop;
        defaultOpenValue: moment.Moment;
        use12Hours: boolean;
        addon: typeof noop;
        onKeyDown: typeof noop;
        inputReadOnly: boolean;
        showHeader: boolean;
    };
    constructor(props: IPanelProps);
    componentWillReceiveProps(nextProps: IPanelProps): void;
    onChange: (newValue: any) => void;
    onCurrentSelectPanelChange: (currentSelectPanel: string) => void;
    close(): void;
    disabledHours: () => any;
    isAM(): boolean;
    render(): JSX.Element;
}
export default Panel;
