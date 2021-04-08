/// <reference types="react" />
export declare const NormalDropdown: () => JSX.Element;
export declare const _PremiseDropdown: {
    (): JSX.Element;
    story: {
        name: string;
    };
};
export declare const MultiSelectDropdown: {
    (): JSX.Element;
    story: {
        name: string;
    };
};
//test start
export declare const ButtonDropdown: {
    (): JSX.Element;
    story: {
        name: string;
    };
};
//test end
declare const _default: {
    title: string;
    component: <T extends any>(props: import("../../components").DropdownProps<T>) => JSX.Element;
};
export default _default;
