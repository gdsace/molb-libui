import * as React from "react";
import { ListcardStatus } from "../EnumValues";
export interface IListcardPros {
    title?: string;
    subTitle?: string;
    description?: string;
    tag?: string;
    supportingText?: string;
    buttonText?: string;
    status?: ListcardStatus;
    onButtonClick?: () => void;
}
export declare class Listcard extends React.Component<IListcardPros, any> {
    static defaultProps: Partial<IListcardPros>;
    render(): JSX.Element;
}
