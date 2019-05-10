import * as React from "react";
import { Size, Theme } from "../EnumValues";
declare type ButtonType = "submit" | "reset" | "button";
export interface IButtonProps {
    onClick: () => any;
    label: string;
    disabled?: boolean;
    className?: string;
    size?: Size;
    theme?: Theme;
    type?: ButtonType;
    icon?: string;
    iconAlign?: "left" | "right";
    children?: React.ReactNode;
    loading?: boolean;
}
export declare class Button extends React.Component<IButtonProps, {}> {
    static defaultProps: Partial<IButtonProps>;
    render(): JSX.Element;
    private renderContent;
    private handleOnClick;
}
export {};
