import * as React from "react";
import { ListcardStatus, Size, Theme } from "../EnumValues";
export interface IListcardPros {
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    description?: React.ReactNode;
    tag?: string;
    supportingText?: string;
    buttonText?: string;
    buttonIcon?: string;
    status?: ListcardStatus;
    onButtonClick?: () => void;
    twoContainers?: boolean;
    buttonTheme?: Theme;
    buttonSize?: Size;
}
export declare class Listcard extends React.Component<IListcardPros, any> {
    static defaultProps: Partial<IListcardPros>;
    render(): JSX.Element;
}
