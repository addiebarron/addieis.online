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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_7b664e1e = require("../../chunks/index-7b664e1e.js");
var app = /* @__PURE__ */ (() => "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  font-size: 16px;\n}\n")();
var Nav_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "nav.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{display:block;width:100%;background:white;border-bottom:solid 1px black}nav.svelte-1rzz5hz ul.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{display:flex;width:100%;max-width:500px;height:100%;padding:0}nav.svelte-1rzz5hz ul li.nav-item.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{flex:1;display:block;position:relative;margin:0;padding:0;cursor:pointer}nav.svelte-1rzz5hz ul li.nav-item a.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{display:flex;width:100%;height:100%}nav.svelte-1rzz5hz ul li.nav-item a.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz:focus{outline:dashed 2px black;outline-offset:-0.6rem}nav.svelte-1rzz5hz ul li.nav-item a span.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{margin:auto}nav.svelte-1rzz5hz ul li.nav-item:hover a.svelte-1rzz5hz>span.svelte-1rzz5hz.svelte-1rzz5hz{border-bottom:solid 1px #ddd;padding-bottom:4px;position:relative;top:3px}nav.svelte-1rzz5hz ul li.nav-item.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz:focus{outline:dashed 2px black;outline-offset:-0.6rem}nav.svelte-1rzz5hz ul li.nav-item[aria-current].svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{position:relative;display:inline-block}nav.svelte-1rzz5hz ul li.nav-item[aria-current].svelte-1rzz5hz>a.svelte-1rzz5hz>span.svelte-1rzz5hz{border-bottom:solid 1px black;padding-bottom:4px;position:relative;top:3px}")();
const css$1 = {
  code: "nav.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{display:block;width:100%;background:white;border-bottom:solid 1px black}nav.svelte-1rzz5hz ul.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{display:flex;width:100%;max-width:500px;height:100%;padding:0}nav.svelte-1rzz5hz ul li.nav-item.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{flex:1;display:block;position:relative;margin:0;padding:0;cursor:pointer}nav.svelte-1rzz5hz ul li.nav-item a.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{display:flex;width:100%;height:100%}nav.svelte-1rzz5hz ul li.nav-item a.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz:focus{outline:dashed 2px black;outline-offset:-0.6rem}nav.svelte-1rzz5hz ul li.nav-item a span.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{margin:auto}nav.svelte-1rzz5hz ul li.nav-item:hover a.svelte-1rzz5hz>span.svelte-1rzz5hz.svelte-1rzz5hz{border-bottom:solid 1px #ddd;padding-bottom:4px;position:relative;top:3px}nav.svelte-1rzz5hz ul li.nav-item.svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz:focus{outline:dashed 2px black;outline-offset:-0.6rem}nav.svelte-1rzz5hz ul li.nav-item[aria-current].svelte-1rzz5hz.svelte-1rzz5hz.svelte-1rzz5hz{position:relative;display:inline-block}nav.svelte-1rzz5hz ul li.nav-item[aria-current].svelte-1rzz5hz>a.svelte-1rzz5hz>span.svelte-1rzz5hz{border-bottom:solid 1px black;padding-bottom:4px;position:relative;top:3px}",
  map: null
};
const Nav = (0, import_index_7b664e1e.c)(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let navItems = [
    { text: "about", href: "/" },
    { text: "projects", href: "/projects" },
    {
      text: "blog",
      href: "https://dev.to/addiebarron"
    }
  ];
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$1);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap"}" data-svelte="svelte-poartv">`, ""}

<nav class="${"svelte-1rzz5hz"}"><ul class="${"svelte-1rzz5hz"}">${(0, import_index_7b664e1e.e)(navItems, (link) => {
    return `<li class="${"nav-item svelte-1rzz5hz"}"${(0, import_index_7b664e1e.a)("aria-current", path == link.href ? "page" : void 0, 0)}><a${(0, import_index_7b664e1e.a)("href", link.href, 0)} class="${"svelte-1rzz5hz"}"><span class="${"svelte-1rzz5hz"}">${(0, import_index_7b664e1e.b)(link.text)}</span></a>
      </li>`;
  })}</ul>
</nav>`;
});
const getStores = () => {
  const stores = (0, import_index_7b664e1e.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '@font-face{font-family:"Inconsolata";font-style:normal;font-weight:400;src:url("/fonts/inconsolata/inconsolata-v20-latin-regular.eot");src:local(""), url("/fonts/inconsolata/inconsolata-v20-latin-regular.eot?#iefix") format("embedded-opentype"), url("/fonts/inconsolata/inconsolata-v20-latin-regular.woff2") format("woff2"), url("/fonts/inconsolata/inconsolata-v20-latin-regular.woff") format("woff"), url("/fonts/inconsolata/inconsolata-v20-latin-regular.ttf") format("truetype"), url("/fonts/inconsolata/inconsolata-v20-latin-regular.svg#Inconsolata") format("svg")}@font-face{font-family:"Inconsolata";font-style:normal;font-weight:700;src:url("/fonts/inconsolata/inconsolata-v20-latin-700.eot");src:local(""), url("/fonts/inconsolata/inconsolata-v20-latin-700.eot?#iefix") format("embedded-opentype"), url("/fonts/inconsolata/inconsolata-v20-latin-700.woff2") format("woff2"), url("/fonts/inconsolata/inconsolata-v20-latin-700.woff") format("woff"), url("/fonts/inconsolata/inconsolata-v20-latin-700.ttf") format("truetype"), url("/fonts/inconsolata/inconsolata-v20-latin-700.svg#Inconsolata") format("svg")}*{box-sizing:border-box;padding:0;margin:0}html,body{height:100%;width:100%;background-color:#f7e9f7}p a,p span.link,span a,span span.link,h1 a,h1 span.link{font-weight:bold;text-decoration:underline}p a:hover,p span.link:hover,span a:hover,span span.link:hover,h1 a:hover,h1 span.link:hover{color:#cc00ff}body{font-family:"Inconsolata";font-size:18px;font-weight:normal}.hidden{display:none}.hcenter{position:absolute;left:50%;-moz-transform:translateX(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vcenter{position:absolute;top:50%;-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);transform:translateY(-50%)}.center{position:absolute;left:50%;top:50%;-moz-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.8)}.box{display:inline-block;font-size:1em;font-weight:normal;line-height:2em;padding:0 10px;background:white;box-shadow:10px 10px rgb(0, 0, 0);border:solid 1px black;margin-bottom:20px}#svelte{display:grid;grid-template-rows:70px 1fr;height:100vh;width:100vw;overflow:hidden}#svelte main{overflow:scroll;display:flex}')();
const css = {
  code: '@font-face{font-family:"Inconsolata";font-style:normal;font-weight:400;src:url("/fonts/inconsolata/inconsolata-v20-latin-regular.eot");src:local(""), url("/fonts/inconsolata/inconsolata-v20-latin-regular.eot?#iefix") format("embedded-opentype"), url("/fonts/inconsolata/inconsolata-v20-latin-regular.woff2") format("woff2"), url("/fonts/inconsolata/inconsolata-v20-latin-regular.woff") format("woff"), url("/fonts/inconsolata/inconsolata-v20-latin-regular.ttf") format("truetype"), url("/fonts/inconsolata/inconsolata-v20-latin-regular.svg#Inconsolata") format("svg")}@font-face{font-family:"Inconsolata";font-style:normal;font-weight:700;src:url("/fonts/inconsolata/inconsolata-v20-latin-700.eot");src:local(""), url("/fonts/inconsolata/inconsolata-v20-latin-700.eot?#iefix") format("embedded-opentype"), url("/fonts/inconsolata/inconsolata-v20-latin-700.woff2") format("woff2"), url("/fonts/inconsolata/inconsolata-v20-latin-700.woff") format("woff"), url("/fonts/inconsolata/inconsolata-v20-latin-700.ttf") format("truetype"), url("/fonts/inconsolata/inconsolata-v20-latin-700.svg#Inconsolata") format("svg")}*{box-sizing:border-box;padding:0;margin:0}html,body{height:100%;width:100%;background-color:#f7e9f7}p a,p span.link,span a,span span.link,h1 a,h1 span.link{font-weight:bold;text-decoration:underline}p a:hover,p span.link:hover,span a:hover,span span.link:hover,h1 a:hover,h1 span.link:hover{color:#cc00ff}body{font-family:"Inconsolata";font-size:18px;font-weight:normal}.hidden{display:none}.hcenter{position:absolute;left:50%;-moz-transform:translateX(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vcenter{position:absolute;top:50%;-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);transform:translateY(-50%)}.center{position:absolute;left:50%;top:50%;-moz-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.8)}.box{display:inline-block;font-size:1em;font-weight:normal;line-height:2em;padding:0 10px;background:white;box-shadow:10px 10px rgb(0, 0, 0);border:solid 1px black;margin-bottom:20px}#svelte{display:grid;grid-template-rows:70px 1fr;height:100vh;width:100vw;overflow:hidden}#svelte main{overflow:scroll;display:flex}',
  map: null
};
const _layout = (0, import_index_7b664e1e.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_7b664e1e.d)(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `





${(0, import_index_7b664e1e.v)(Nav, "Nav").$$render($$result, { path: $page.url.pathname }, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

`;
});
