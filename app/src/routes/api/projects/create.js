import { nanoid } from "nanoid";
import { v2 as cloudinary } from "cloudinary";

import { getFormBody, serverError } from "../_utils";
import { idLength } from "./_schema";
import db from "../_db";

cloudinary.config({
  secure: true,
});

export async function post(request) {
  // This project's unique ID
  const id = nanoid(idLength);
  // Get the passed form data from the request body
  const body = getFormBody(request.body);

  // Upload Image
  try {
    // query cloudinary
    const options = {
      public_id: id,
      eager: ["t_projects"],
    };
    await cloudinary.uploader.upload(body.imageBase64, options);
    // set project image src
    body.imagesrc = cloudinary.url(id, {
      transformation: ["projects"],
    });
  } catch (err) {
    return serverError(err);
  }

  // Project data
  const project = {
    id,
    title: body.title,
    description: body.description,
    url: body.url,
    color: body.color,
    imagesrc: body.imagesrc,
    show: body.show,
  };

  // Save to DB
  const keys = Object.keys(project).join(",");
  const values = Object.values(project);
  const valParams = values.map((_, i) => "$" + (i + 1)).join(",");
  const text = `INSERT INTO projects(${keys}) VALUES(${valParams}) RETURNING *;`;
  try {
    await db.query(text, values);
  } catch (err) {
    // delete the image from cloudinary
    await cloudinary.uploader.destroy(id);
    return serverError(err);
  }

  return {
    status: 301,
    headers: { Location: "/projects?sudo&success" },
  };
}
