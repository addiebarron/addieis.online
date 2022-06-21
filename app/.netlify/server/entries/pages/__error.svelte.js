var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _error,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_7b664e1e = require("../../chunks/index-7b664e1e.js");
var __error_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-d994s3.svelte-d994s3,p.svelte-d994s3.svelte-d994s3{margin:0 auto}h1.svelte-d994s3.svelte-d994s3{font-weight:700}.error-container.svelte-d994s3.svelte-d994s3{display:flex;flex-direction:column;height:70%;width:100%}.error-container.svelte-d994s3 h1.svelte-d994s3{font-family:'Major Mono Display';font-size:20em;font-weight:bold;color:rgba(0, 0, 0, 0.3);margin:auto}.error-container.svelte-d994s3 p.svelte-d994s3{font-size:1.5em;font-style:italic}@media(min-width: 480px){h1.svelte-d994s3.svelte-d994s3{font-size:4em}}")();
const css = {
  code: "h1.svelte-d994s3.svelte-d994s3,p.svelte-d994s3.svelte-d994s3{margin:0 auto}h1.svelte-d994s3.svelte-d994s3{font-weight:700}.error-container.svelte-d994s3.svelte-d994s3{display:flex;flex-direction:column;height:70%;width:100%}.error-container.svelte-d994s3 h1.svelte-d994s3{font-family:'Major Mono Display';font-size:20em;font-weight:bold;color:rgba(0, 0, 0, 0.3);margin:auto}.error-container.svelte-d994s3 p.svelte-d994s3{font-size:1.5em;font-style:italic}@media(min-width: 480px){h1.svelte-d994s3.svelte-d994s3{font-size:4em}}",
  map: null
};
function load({ error, status }) {
  return { props: { status, error } };
}
const _error = (0, import_index_7b664e1e.c)(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `







${$$result.head += `${$$result.title = `<title>${(0, import_index_7b664e1e.b)(status)}</title>`, ""}`, ""}

<div class="${"error-container svelte-d994s3"}"><h1 class="${"svelte-d994s3"}">${(0, import_index_7b664e1e.b)(status)}</h1>
  ${status == 404 ? `<p class="${"svelte-d994s3"}">There&#39;s nothing here!</p>` : ``}</div>

${error.stack ? `<pre>${(0, import_index_7b664e1e.b)(error.stack)}</pre>` : ``}`;
});
