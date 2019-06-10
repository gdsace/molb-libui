export declare function forPhoneOnlyMediaQuery(): boolean;
export declare function forTabletMediaQuery(): boolean;
export declare function forDesktopUpMediaQuery(): boolean;
/**
 * add a locatedErrorClassName to the origin classname
 * @param classname origin classname
 * @param locatedErrorClassName added classnames used for error location
 */
export declare function addLocatedErrorClassname(classname: string, locatedErrorClassName?: string): string;
export declare function getFilenameByHttpHeaders(headers: Headers): string | undefined;
export declare function getFilenameByContentDisposition(contentDisposition: string | null): string | undefined;
export declare const isIOSDevice: boolean | "";
export declare const isIEDevice: () => boolean;
