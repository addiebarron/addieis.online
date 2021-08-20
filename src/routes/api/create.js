import { nanoid } from "nanoid";
import sharp from "sharp";
import { promises as fsPromises } from "fs";
const { writeFile, readFile } = fsPromises;

import { ProjectData } from "$lib/store";
import { forStatement } from "@babel/types";

// everything is relative to static
const staticDir = "static/";
const uploadsURL = "images/projects/";
const uploadsDir = staticDir + uploadsURL;

const dataFile = staticDir + "data/projects.json";

export async function post(request) {
  const body = getFormBody(request.body);

  // Upload Image
  try {
    console.log("Trying to upload image...");
    body.imageSrc = await saveImage(body.imageBase64);
  } catch (err) {
    console.log(err);
    return { status: 500 };
  }

  // Save to JSON file
  try {
    await saveProjectData(body);
  } catch (err) {
    console.log(err);
    return { status: 500 };
  }

  return {
    status: 301,
    headers: { Location: "/projects?success" },
  };
}

async function saveImage(imageBase64) {
  const imageName = `${nanoid()}.webp`;

  await sharp(Buffer.from(imageBase64, "base64"))
    .rotate()
    .resize({ width: 200, height: 200 })
    .webp()
    .toFile(uploadsDir + imageName);

  return uploadsURL + imageName;
}

async function saveProjectData(body) {
  const data = await readFile(dataFile);
  const projects = JSON.parse(data.toString());

  const newProject = {
    id: projects.length,
    title: body.title,
    description: body.description,
    url: body.url,
    imageSrc: body.imageSrc,
    show: body.show,
  };

  projects.push(newProject);

  const newData = JSON.stringify(projects, null, 2);

  await writeFile(dataFile, newData);
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
