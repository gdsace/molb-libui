import * as React from "react";
import { FlatButtonTheme } from "../EnumValues";
import { IIconCategory } from "../icons";
export interface IFlatButtonProps {
    onClick: () => any;
    iconType: string;
    label: string;
    iconCategory?: IIconCategory;
    disabled?: boolean;
    containerClassName?: string;
    theme?: FlatButtonTheme;
}
export declare class FlatButton extends React.Component<IFlatButtonProps, {}> {
    static defaultProps: Partial<IFlatButtonProps>;
    render(): JSX.Element;
    private handleOnClick;
}
