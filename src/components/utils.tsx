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

export function getFilenameByHttpHeaders(headers: Headers) {
  return getFilenameByContentDisposition(headers.get("Content-Disposition"));
}

export function getFilenameByContentDisposition(
  contentDisposition: string | null
) {
  if (contentDisposition == null) {
    return undefined;
  }
  const regex = /filename[^=]*=['"]?([^'"]*)['"]?/;
  const matches = regex.exec(contentDisposition);
  if (matches != null && matches[1]) {
    return matches[1];
  }
}

export const isIOSDevice =
  typeof window !== "undefined" &&
  window.navigator &&
  window.navigator.platform &&
  /iP(ad|hone|od)/.test(window.navigator.platform);

export const isIEDevice = () => {
  const userAgent = navigator.userAgent;
  const isIE =
    userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // IE<11
  const isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // Edge
  const isIE11 =
    userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE || isEdge || isIE11) {
    return true;
  } else {
    return false;
  }
};
