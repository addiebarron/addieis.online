import { serverError } from "../_utils";
import db from "../_db";

export async function get(request) {
  const { id } = request.body;
  const text = `SELECT * FROM projects WHERE id=$1;`;

  try {
    const result = await db.query(text, [id]);
    project = result.rows[0];
  } catch (err) {
    console.log(err);
    return serverError(err);
  }

  return {
    status: 200,
    body: JSON.stringify(project),
  };
}
