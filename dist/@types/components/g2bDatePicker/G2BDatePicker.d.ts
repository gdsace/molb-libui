import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";
interface IG2BDatePickerState {
    selected?: boolean;
}
export interface IG2BDatePickerProps {
    selectedDate: Date | null;
    onChange: (date: Date | null, event?: React.SyntheticEvent<any>) => void;
    placeholderText?: string;
    dateFormat?: string;
    showError?: boolean;
    errorMsg?: string;
    customInput?: React.ReactNode;
}
export declare class G2BDatePicker extends React.Component<IG2BDatePickerProps, IG2BDatePickerState> {
    static defaultProps: Partial<IG2BDatePickerProps>;
    constructor(props: any);
    render(): JSX.Element;
    private handleChange;
    private handleClickOutside;
    private handleFocus;
}
export {};
