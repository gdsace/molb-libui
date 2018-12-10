import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

// polyfill for requestAnimationFrame warning.
// Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers.
import "raf/polyfill";

const { JSDOM } = require("jsdom");

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

export interface IGlobal {
  document: Document;
  window: Window;
  navigator: any;
}

declare var global: IGlobal;

// TODO use jest-fetch-mock to make mock more flexable
// @ts-ignore
// global.fetch = require("jest-fetch-mock");
global.fetch = () => new Promise(() => null);

const jsdom = new JSDOM(
  '<!doctype html><html><div id="root"></div><div id="modal-root"></div></html>'
);
const { window } = jsdom;

function copyProps(src: any, target: any) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === "undefined")
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop)
      }),
      {}
    );
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js"
};
copyProps(window, global);
