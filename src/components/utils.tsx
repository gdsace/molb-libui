import classnames from "classnames";
import { LocatedError } from "./constants";

function getMediaQuery(mediaQueryPattern: string): boolean {
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
export function addLocatedErrorClassname(
  classname: string,
  locatedErrorClassName = LocatedError
) {
  return classnames(classname, locatedErrorClassName);
}
