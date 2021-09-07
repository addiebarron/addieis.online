import { serverError } from "../_utils";
import db from "../_db";
import cdn from "../_cdn";

export async function post(request) {
  const { id } = request.body;

  // Delete image from CDN
  try {
    await cdn.destroy(id);
  } catch (err) {
    console.log(err);
    return serverError(err);
  }

  // Delete project from database
  const text = `DELETE FROM projects WHERE id=$1;`;
  try {
    await db.query(text, [id]);
  } catch (err) {
    console.log(err);
    return serverError(err);
  }

  return {
    status: 301,
    headers: { Location: "/projects?sudo&success=delete" },
  };
}
