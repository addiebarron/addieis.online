// import db from "./routes/api/_db";
// import { dbSchema } from "./routes/api/projects/_schema";

// export async function handle({ request, resolve }) {
//   // Create the projects table if it doesn't exist yet
//   if (request.path.startsWith("/api/projects")) {
//     const params = Object.entries(dbSchema).map((field) => field.join(" "));
//     const strings = db.strings(params.length);
//     const template = `CREATE TABLE IF NOT EXISTS projects(${strings});`;
//     const text = db.format(template, ...params);
//     try {
//       await db.query(text);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   return resolve(request);
// }
