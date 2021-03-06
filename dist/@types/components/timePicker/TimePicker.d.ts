import moment from "moment";
import React from "react";
import "./assets/index.scss";
declare function noop(): void;
interface ITimePickerProps {
    prefixCls?: string;
    clearText?: string;
    defaultOpenValue: moment.Moment;
    value?: moment.Moment;
    inputReadOnly?: boolean;
    disabled?: boolean;
    allowEmpty?: boolean;
    defaultValue?: moment.Moment;
    open?: boolean;
    defaultOpen?: boolean;
    align?: object;
    placement?: any;
    transitionName?: string;
    getPopupContainer?: (...args: any[]) => any;
    placeholder?: string;
    format?: string;
    showHour?: boolean;
    showMinute?: boolean;
    showSecond?: boolean;
    style?: object;
    className?: string;
    popupClassName?: string;
    disabledHours?: (...args: any[]) => any;
    disabledMinutes?: (...args: any[]) => any;
    disabledSeconds?: (...args: any[]) => any;
    hideDisabledOptions?: boolean;
    onChange?: (...args: any[]) => any;
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    addon?: (...args: any[]) => any;
    name?: string;
    autoComplete?: string;
    use12Hours?: boolean;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    focusOnOpen?: boolean;
    onKeyDown?: (...args: any[]) => any;
    autoFocus?: boolean;
    id?: string;
    inputIcon?: React.ReactNode;
    clearIcon?: React.ReactNode;
    title?: string;
    errorMsg?: string;
    showError?: boolean;
}
interface ITimePickerState {
    value?: moment.Moment;
    open?: boolean;
}
/**
 * when TimePicker use in modalBox, need to use getPopupContainer to pass a element that needs to be mounted
 * example: OperatingHoursComponent.tst in molb-web
 */
export declare class TimePicker extends React.Component<ITimePickerProps, ITimePickerState> {
    static defaultProps: {
        clearText: string;
        prefixCls: string;
        defaultOpen: boolean;
        inputReadOnly: boolean;
        style: {};
        className: string;
        popupClassName: string;
        id: string;
        align: {};
        defaultOpenValue: moment.Moment;
        allowEmpty: boolean;
        showHour: boolean;
        showMinute: boolean;
        showSecond: boolean;
        disabledHours: typeof noop;
        disabledMinutes: typeof noop;
        disabledSeconds: typeof noop;
        hideDisabledOptions: boolean;
        placement: string;
        onChange: typeof noop;
        onOpen: typeof noop;
        onClose: typeof noop;
        onFocus: typeof noop;
        onBlur: typeof noop;
        addon: typeof noop;
        use12Hours: boolean;
        focusOnOpen: boolean;
        onKeyDown: typeof noop;
        showError: boolean;
    };
    private readonly saveInputRef;
    private readonly savePanelRef;
    constructor(props: ITimePickerProps);
    UNSAFE_componentWillReceiveProps(nextProps: ITimePickerProps): void;
    onPanelChange: (value: any) => void;
    onPanelClear: () => void;
    onVisibleChange: (open: any) => void;
    onEsc: () => void;
    onKeyDown: (e: any) => void;
    setValue(value: any): void;
    getFormat(): string;
    getPanelElement(): JSX.Element;
    getPopupClassName(): string | undefined;
    setOpen(open: any): void;
    focus(): void;
    blur(): void;
    render(): JSX.Element;
}
export {};
