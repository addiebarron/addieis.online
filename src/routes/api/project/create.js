import { nanoid } from "nanoid";
import { promises as fsPromises } from "fs";
const { writeFile, readFile } = fsPromises;

import {
  saveProcessedImage,
  saveUnprocessedImage,
  removeDirIfExists,
  makeDirIfNone,
} from "../_utils";

// this project's unique ID
const projectUUID = nanoid();

// filesystem actions are relative to static
const staticDir = "static";
// in the browser, static is served from /
const imageLoc = `/images/projects/${projectUUID}/`;

const uploadsDir = staticDir + imageLoc;
const dataFile = staticDir + "/data/projects.json";

export async function post(request) {
  const body = getFormBody(request.body);

  // Upload Image
  try {
    await makeDirIfNone(uploadsDir);
    // save original and processed versions
    await saveProcessedImage(body.imageBase64, uploadsDir + "main.png");
    await saveUnprocessedImage(body.imageBase64, uploadsDir + "orig.png");
    // set project imageSrc
    body.imageSrc = imageLoc + "main.png";
  } catch (err) {
    return serverError(err);
  }

  // Save to JSON file
  try {
    await saveProjectData(body);
  } catch (err) {
    await removeDirIfExists(uploadsDir);
    return serverError(err);
  }

  return {
    status: 301,
    headers: { Location: "/projects?sudo&success" },
  };
}

// Save a given project to the file
async function saveProjectData(body) {
  let data;
  try {
    data = await readFile(dataFile);
  } catch {
    data = "[]";
  }

  const projects = JSON.parse(data.toString());

  projects.push({
    id: projectUUID,
    title: body.title,
    description: body.description,
    url: body.url,
    color: body.color,
    imageSrc: body.imageSrc,
    show: body.show,
  });

  const newData = JSON.stringify(projects, null, 2);
  await writeFile(dataFile, newData);
}

// generic server error
function serverError(err) {
  console.log(err);
  return { status: 500 };
}

// nice helper function via Dana Woodman:
// https://dev.to/danawoodman/getting-form-body-data-in-your-sveltekit-endpoints-4a85
function getFormBody(body) {
  return [...body.entries()].reduce((data, [k, v]) => {
    let value = v;
    if (["true", "on", "checked"].includes(value)) value = true;
    if (["false", "off", "unchecked"].includes(value)) value = false;
    if (k in data)
      data[k] = Array.isArray(data[k]) ? [...data[k], value] : [data[k], value];
    else data[k] = value;
    return data;
  }, {});
}
