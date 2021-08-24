import { promises as fsPromises } from "fs";
const { writeFile, readFile } = fsPromises;

import { removeDirIfExists } from "../_utils";

// everything is relative to static
const staticDir = "static";
const dataFile = staticDir + "/data/projects.json";

export async function post(request) {
  const project = request.body;

  // Delete image
  const imageDir = staticDir + "/images/projects/" + project.id;
  await removeDirIfExists(imageDir);

  // Delete project from JSON
  try {
    await deleteProjectData(project.id);
  } catch (err) {
    console.log(err);
    return { status: 500 };
  }

  return {
    status: 301,
    headers: { Location: "/projects?success&sudo" },
  };
}

async function deleteProjectData(id) {
  const data = await readFile(dataFile);
  let projects = JSON.parse(data.toString());

  projects = projects.filter((project) => project.id != id);

  const newData = JSON.stringify(projects, null, 2);

  await writeFile(dataFile, newData);
}
