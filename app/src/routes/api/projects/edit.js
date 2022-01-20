import { getFormBody, serverError } from "../_utils";
import db from "../_db";
import cdn from "../_cdn";

// TODO add image updating
export async function post(request) {
  const body = getFormBody(request.body);

  console.log(body);

  // Update project rows in database
  const text = `UPDATE projects SET title = $2, description = $3, url = $4, software = $5, show = $6 WHERE id = $1;`;
  const params = [body.id, body.title, body.description, body.url, body.software, body.show];
  try {
    await db.query(text, params);
  } catch (err) {
    console.log(err);
    return serverError(err);
  }

  return {
    status: 301,
    headers: { Location: "/projects?sudo&success=edit" },
  };
}
