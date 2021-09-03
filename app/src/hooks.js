import db from "./routes/api/_db";
import { dbSchema } from "./routes/api/projects/_schema";

export async function handle({ request, resolve }) {
  // Create the projects table if it doesn't exist yet
  if (request.path.startsWith("/api/projects")) {
    const tableFields = Object.entries(dbSchema)
      .map((field) => field.join(" "))
      .join(",");
    const createTableQuery = `CREATE TABLE IF NOT EXISTS projects(${tableFields});`;
    try {
      await db.query(createTableQuery);
    } catch (err) {
      console.log(err);
    }
  }
  return resolve(request);
}
