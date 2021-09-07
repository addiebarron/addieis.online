// CommonJS workaround
import pg from "pg";
const { Client } = pg;
import pgformat from "pg-format";

export default {
  async query(text, params) {
    const client = new Client();
    await client.connect();
    try {
      const start = Date.now();
      const result = await client.query(text, params);
      const duration = Date.now() - start;
      console.log("Executed query", {
        text,
        params,
        duration,
        rows: result.rowCount,
      });
      return result;
    } catch (err) {
      throw err;
    } finally {
      await client.end();
    }
  },

  format(...args) {
    return pgformat(...args);
  },
  placeholders(n) {
    return Array.from(Array(n), (_, i) => "$" + (i + 1));
  },
  identifiers(n) {
    return Array(n).fill("%I");
  },
  literals(n) {
    return Array(n).fill("%L");
  },
  strings(n) {
    return Array(n).fill("%s");
  },
};
