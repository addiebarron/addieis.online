import { nanoid } from "nanoid";

import { getFormBody, serverError } from "../_utils";
import { idLength } from "./_schema";

import cdn from "../_cdn";
import db from "../_db";

export async function post(request) {
  // This project's unique ID
  const id = nanoid(idLength);
  // Get the passed form data from the request body
  const body = getFormBody(request.body);

  // Upload Image
  try {
    // query cloudinary
    await cdn.uploadProject(body.imageBase64, id);
    // set project image src
    body.imagesrc = await cdn.projectURL(id);
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
    software: body.software,
    imagesrc: body.imagesrc,
    show: body.show,
  };

  // Save to DB
  const keys = Object.keys(project);
  const vals = Object.values(project);
  // Escape identifiers to avoid SQL injection
  const identifiers = db.identifiers(keys.length);
  const placeholders = db.placeholders(vals.length);
  const template = `INSERT INTO projects(${identifiers}) VALUES(${placeholders}) RETURNING *;`;
  const text = db.format(template, ...keys);
  try {
    // Parameters are escaped here (in pg.Client.query)
    await db.query(text, vals);
  } catch (err) {
    // On error, delete the uploaded image from CDN
    await cdn.destroy(id);
    return serverError(err);
  }

  return {
    status: 301,
    headers: { Location: "/projects?sudo&success=create" },
  };
}
