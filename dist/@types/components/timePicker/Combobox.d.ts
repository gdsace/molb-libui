import moment from "moment";
import { Component } from "react";
interface IComboboxProps {
    format: string;
    defaultOpenValue?: moment.Moment;
    prefixCls: string;
    value: moment.Moment;
    onChange: (...args: any[]) => any;
    showHour?: boolean;
    showMinute?: boolean;
    showSecond?: boolean;
    hourOptions: any[];
    minuteOptions: any[];
    secondOptions: any[];
    disabledHours?: (...args: any[]) => any;
    disabledMinutes?: (...args: any[]) => any;
    disabledSeconds?: (...args: any[]) => any;
    onCurrentSelectPanelChange?: (...args: any[]) => any;
    use12Hours?: boolean;
    isAM?: boolean;
}
export declare class Combobox extends Component<IComboboxProps, {}> {
    onItemChange: (type: any, itemValue: any) => void;
    onEnterSelectPanel: (range: any) => void;
    getHourSelect(hour: any): JSX.Element | null;
    getMinuteSelect(minute: any): JSX.Element | null;
    getSecondSelect(second: any): JSX.Element | null;
    getAMPMSelect(): JSX.Element | null;
    render(): JSX.Element;
}
export default Combobox;
