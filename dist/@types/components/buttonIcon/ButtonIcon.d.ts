import * as React from "react";
import { IIconProps } from "../icons";
export interface IButtonIconProps extends IIconProps {
    onClick: () => any;
    disabled?: boolean;
    iconClassName?: string;
}
export declare class ButtonIcon extends React.Component<IButtonIconProps, {}> {
    static defaultProps: Partial<IButtonIconProps>;
    render(): JSX.Element;
    private handleOnClick;
}
