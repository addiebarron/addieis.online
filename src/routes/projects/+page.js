import { error } from "@sveltejs/kit";
import yaml from "js-yaml";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  let projects = [];
  try {
    const res = await fetch("/data.yaml");
    const text = await res.text();
    projects = res.ok ? yaml.load(text) ?? [] : [];
  } catch {
    throw error(500, "Error reading projects data file.");
  }

  return {
    projects,
  };
}
