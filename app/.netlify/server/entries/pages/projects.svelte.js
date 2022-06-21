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
  default: () => Projects,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_7b664e1e = require("../../chunks/index-7b664e1e.js");
var import_js_yaml = __toESM(require("js-yaml"));
var projects_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "article.svelte-16a3le3.svelte-16a3le3{height:100%;width:100%;max-width:700px;padding:40px 30px 20px 20px;margin:auto;position:relative}article.svelte-16a3le3 h2.svelte-16a3le3{padding-bottom:40px}article.svelte-16a3le3 h3.svelte-16a3le3{color:rgba(0, 0, 0, 0.8);padding:40px 0 20px 0;font-style:italic}article.svelte-16a3le3 .project.svelte-16a3le3{display:inline-block;font-size:1em;font-weight:normal;line-height:2em;padding:0 10px;background:white;box-shadow:10px 10px rgb(0, 0, 0);border:solid 1px black;margin-bottom:20px;padding:10px;line-height:1.2em;margin-bottom:30px}article.svelte-16a3le3 .project h4.svelte-16a3le3{margin-bottom:10px}article.svelte-16a3le3 .project h4 a.svelte-16a3le3{text-decoration:underline}article.svelte-16a3le3 .project h4 a.svelte-16a3le3:hover{color:#cc00ff}article.svelte-16a3le3 div.pink.svelte-16a3le3{background:#f2d0e2}span.svelte-16a3le3.svelte-16a3le3{color:grey;font-style:italic}")();
const css = {
  code: "article.svelte-16a3le3.svelte-16a3le3{height:100%;width:100%;max-width:700px;padding:40px 30px 20px 20px;margin:auto;position:relative}article.svelte-16a3le3 h2.svelte-16a3le3{padding-bottom:40px}article.svelte-16a3le3 h3.svelte-16a3le3{color:rgba(0, 0, 0, 0.8);padding:40px 0 20px 0;font-style:italic}article.svelte-16a3le3 .project.svelte-16a3le3{display:inline-block;font-size:1em;font-weight:normal;line-height:2em;padding:0 10px;background:white;box-shadow:10px 10px rgb(0, 0, 0);border:solid 1px black;margin-bottom:20px;padding:10px;line-height:1.2em;margin-bottom:30px}article.svelte-16a3le3 .project h4.svelte-16a3le3{margin-bottom:10px}article.svelte-16a3le3 .project h4 a.svelte-16a3le3{text-decoration:underline}article.svelte-16a3le3 .project h4 a.svelte-16a3le3:hover{color:#cc00ff}article.svelte-16a3le3 div.pink.svelte-16a3le3{background:#f2d0e2}span.svelte-16a3le3.svelte-16a3le3{color:grey;font-style:italic}",
  map: null
};
async function load({ fetch }) {
  var _a;
  let projects = [];
  try {
    const res = await fetch("/data.yaml");
    const text = await res.text();
    projects = res.ok ? (_a = import_js_yaml.default.load(text)) != null ? _a : [] : [];
  } catch {
    console.log("Error reading data file.");
  }
  return { props: { projects } };
}
let whenThingsGetOld = 4;
const Projects = (0, import_index_7b664e1e.c)(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>addie b - projects</title>`, ""}`, ""}

<article class="${"svelte-16a3le3"}"><h2 class="${"svelte-16a3le3"}">projects</h2>
  <div class="${"project pink svelte-16a3le3"}"><p><a href="${"/resume.pdf"}" class="${"svelte-16a3le3"}">Download my resume</a></p></div>
  ${projects.length ? `${(0, import_index_7b664e1e.e)(projects, (project, i) => {
    return `${i == whenThingsGetOld ? `<h3 class="${"svelte-16a3le3"}">Older projects for which I can&#39;t be held responsible</h3>` : ``}
      ${project.show ? `<div class="${"project svelte-16a3le3"}"><h4 class="${"svelte-16a3le3"}"><a target="${"_blank"}"${(0, import_index_7b664e1e.a)("href", project.url, 0)} class="${"svelte-16a3le3"}">${(0, import_index_7b664e1e.b)(project.title)}</a></h4>
          <p>${(0, import_index_7b664e1e.b)(project.description)}</p>
        </div>` : ``}`;
  })}` : `<span class="${"svelte-16a3le3"}">Nothing here.</span>`}
</article>`;
});
