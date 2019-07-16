import * as React from "react";
import { FlexDirectionType } from "../EnumValues";
export interface IFlexWrapperProps {
    flexDirection: FlexDirectionType;
    children: React.ReactNode;
}
export declare class FlexWrapper extends React.Component<IFlexWrapperProps, {}> {
    static defaultProps: Partial<IFlexWrapperProps>;
    render(): JSX.Element;
}
