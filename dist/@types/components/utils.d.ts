export declare function forPhoneOnlyMediaQuery(): boolean;
export declare function forTabletMediaQuery(): boolean;
export declare function forDesktopUpMediaQuery(): boolean;
/**
 * add a locatedErrorClassName to the origin classname
 * @param classname origin classname
 * @param locatedErrorClassName added classnames used for error location
 */
export declare function addLocatedErrorClassname(classname: string, locatedErrorClassName?: string): string;
export declare function getFileNameByHttpHeaders(headers: Headers): string | undefined;
export declare function getFileNameByContentDisposition(contentDisposition: string | null): string | undefined;
