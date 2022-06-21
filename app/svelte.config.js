import adapterStatic from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic(),
  },
  preprocess: preprocess(),
};

export default config;
