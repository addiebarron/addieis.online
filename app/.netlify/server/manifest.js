var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["data.yaml", "fonts/inconsolata/inconsolata-v20-latin-700.eot", "fonts/inconsolata/inconsolata-v20-latin-700.svg", "fonts/inconsolata/inconsolata-v20-latin-700.ttf", "fonts/inconsolata/inconsolata-v20-latin-700.woff", "fonts/inconsolata/inconsolata-v20-latin-700.woff2", "fonts/inconsolata/inconsolata-v20-latin-regular.eot", "fonts/inconsolata/inconsolata-v20-latin-regular.svg", "fonts/inconsolata/inconsolata-v20-latin-regular.ttf", "fonts/inconsolata/inconsolata-v20-latin-regular.woff", "fonts/inconsolata/inconsolata-v20-latin-regular.woff2", "images/a.jpg", "images/favicon.png", "resume.pdf"]),
  mimeTypes: { ".yaml": "text/yaml", ".eot": "application/vnd.ms-fontobject", ".svg": "image/svg+xml", ".ttf": "font/ttf", ".woff": "font/woff", ".woff2": "font/woff2", ".jpg": "image/jpeg", ".png": "image/png", ".pdf": "application/pdf" },
  _: {
    entry: { "file": "start-3dc197ac.js", "js": ["start-3dc197ac.js", "chunks/index-169adf5d.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "projects",
        pattern: /^\/projects\/?$/,
        names: [],
        types: [],
        path: "/projects",
        shadow: null,
        a: [0, 3],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
