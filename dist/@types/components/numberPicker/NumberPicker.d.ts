import * as React from "react";
export interface INumberPickerStates {
    inputError: boolean;
}
export interface INumberPickerProps {
    onQuantityChange: (newQuantity: number) => any;
    handleInputChange: (newQuantity: number) => any;
    quantity: number;
    max: number;
    min: number;
    history?: any;
    disablePrev?: boolean;
    disableNext?: boolean;
    disableInput?: boolean;
    className?: string;
}
export declare class NumberPicker extends React.Component<INumberPickerProps, INumberPickerStates> {
    constructor(props: INumberPickerProps);
    static defaultProps: Partial<INumberPickerProps>;
    DecreaseItem: () => void;
    IncrementItem: () => void;
    onInputChange: (value: any) => void;
    render(): JSX.Element;
}
