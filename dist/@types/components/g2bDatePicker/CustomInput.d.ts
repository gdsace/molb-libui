import React from "react";
interface ICustomInputState {
    customInputSelected: boolean;
}
export declare class CustomInput extends React.Component<any, ICustomInputState> {
    constructor(props: any);
    render(): JSX.Element;
    private handleOnClick;
    private handleOnBlur;
}
export {};
