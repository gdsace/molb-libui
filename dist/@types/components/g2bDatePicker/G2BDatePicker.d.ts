import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";
export interface IG2BDatePickerProps {
    selectedDate: Date | null;
    onChange: (date: Date | null, event?: React.SyntheticEvent<any>) => void;
    placeholderText?: string;
    dateFormat?: string;
    showError?: boolean;
    errorMsg?: string;
}
export declare class G2BDatePicker extends React.Component<IG2BDatePickerProps, any> {
    static defaultProps: Partial<IG2BDatePickerProps>;
    render(): JSX.Element;
    private handleChange;
}
