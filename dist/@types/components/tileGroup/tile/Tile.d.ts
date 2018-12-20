/// <reference types="react" />
import { TileTheme } from "@libui/components/EnumValues";
export interface ITileProps {
    icon?: string;
    content: string;
    subContent?: string;
    description?: string;
    checked?: boolean;
    onChange?: (e: any) => void;
    disabled?: boolean;
    value?: string;
    theme?: TileTheme;
    containerStyle?: string;
    unselectable?: boolean;
    imgSrc?: string;
    imgAlt?: string;
}
export declare const Tile: (props: ITileProps) => JSX.Element;
