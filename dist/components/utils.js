import classnames from "classnames";
import { LocatedError } from "./constants";
function getMediaQuery(mediaQueryPattern) {
    return window.matchMedia(mediaQueryPattern).matches;
}
export function forPhoneOnlyMediaQuery() {
    return getMediaQuery("(max-width: 600px)");
}
export function forTabletMediaQuery() {
    return getMediaQuery("(min-width: 600px) and (max-width: 1140px) ");
}
export function forDesktopUpMediaQuery() {
    return getMediaQuery("(min-width: 1140px)");
}
/**
 * add a locatedErrorClassName to the origin classname
 * @param classname origin classname
 * @param locatedErrorClassName added classnames used for error location
 */
export function addLocatedErrorClassname(classname, locatedErrorClassName) {
    if (locatedErrorClassName === void 0) { locatedErrorClassName = LocatedError; }
    return classnames(classname, locatedErrorClassName);
}
export function getFilenameByHttpHeaders(headers) {
    return getFilenameByContentDisposition(headers.get("Content-Disposition"));
}
export function getFilenameByContentDisposition(contentDisposition) {
    if (contentDisposition == null) {
        return undefined;
    }
    var regex = /filename[^=]*=['"]?([^'"]*)['"]?/;
    var matches = regex.exec(contentDisposition);
    if (matches != null && matches[1]) {
        return matches[1];
    }
}
//# sourceMappingURL=utils.js.map