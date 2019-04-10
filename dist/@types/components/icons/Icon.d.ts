/// <reference types="react" />
export declare type IIconCategory = "licences" | "shoptypes";
export interface IIconProps {
    type: string;
    category?: IIconCategory;
    className?: string;
    size?: string;
    viewBox?: string;
}
export declare const Icon: (props: IIconProps) => JSX.Element;
