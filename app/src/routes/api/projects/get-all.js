import { serverError } from "../_utils";
import db from "../_db";

export async function get(request) {
  const text = `SELECT * FROM projects;`;
  let rows = [];
  try {
    const result = await db.query(text);
    rows = result.rows;
  } catch (err) {
    console.log(err);
    return serverError(err);
  }

  return {
    status: 200,
    body: JSON.stringify(rows),
  };
}
