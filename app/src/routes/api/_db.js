import { Client as PostgresClient } from "pg";

export default {
  async query(text, params) {
    const client = new PostgresClient();
    await client.connect();
    let error;
    try {
      const start = Date.now();
      const result = await client.query(text, params);
      const duration = Date.now() - start;
      console.log("Executed query", { text, duration, rows: result.rowCount });
      return result;
    } catch (err) {
      error = err;
    } finally {
      await client.end();
    }
    if (error) throw error;
  },
};