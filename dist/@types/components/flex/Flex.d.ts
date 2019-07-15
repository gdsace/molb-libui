import * as React from "react";
import { FlexDirectionType } from "../EnumValues";
export interface IFlexProps {
    flexDirection: FlexDirectionType;
    children: React.ReactNode;
}
export declare class Flex extends React.Component<IFlexProps, {}> {
    static defaultProps: Partial<IFlexProps>;
    render(): JSX.Element;
}
