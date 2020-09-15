import React from "react";
import { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";
interface IG2BDatePickerState {
    focusedOnInput?: boolean;
}
export interface IG2BDatePickerProps extends Partial<ReactDatePickerProps> {
    selectedDate?: string;
    onDateChange?: (date: string, event?: React.SyntheticEvent<any>) => void;
    errorMsg?: string;
}
export declare class G2BDatePicker extends React.Component<IG2BDatePickerProps, IG2BDatePickerState> {
    static defaultProps: Partial<IG2BDatePickerProps>;
    constructor(props: any);
    render(): JSX.Element;
    private convertStringToDate;
    private convertDateToString;
    private handleChange;
    private getIconClassNames;
    private getInputClassNames;
    private handleClickOutside;
    private handleFocus;
}
export {};
