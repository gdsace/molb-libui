import { TimePickerProps as AntdTimePickerProps } from "antd/lib/time-picker";
import * as React from "react";
import "antd/dist/antd.css";
import "./antd-time-picker-override.css";
export interface ITimePickerPros extends AntdTimePickerProps {
    title?: string;
    errorMsg?: string;
    showError?: boolean;
    theme?: string;
}
export declare class TimePicker extends React.Component<ITimePickerPros, any> {
    static defaultProps: Partial<ITimePickerPros>;
    constructor(props: any);
    render(): JSX.Element;
    private handleTimePickerChange;
}
