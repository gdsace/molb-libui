import * as React from "react";
import { CardTheme, TagTheme } from "../EnumValues";
export interface ICardProps {
    title: string;
    titleIcon?: React.ReactNode;
    subtitle: string;
    supportingText?: string;
    description?: React.ReactNode;
    status?: string;
    statusTheme?: TagTheme;
    actionField?: React.ReactNode;
    theme?: CardTheme;
    className?: string;
    date?: string;
    onClick?: () => void;
}
export declare class Card extends React.Component<ICardProps> {
    static defaultProps: Partial<ICardProps>;
    render(): JSX.Element;
    private handleOnClick;
}
