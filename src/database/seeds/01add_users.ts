import { Knex } from "knex";

const TABLE_NAME = "users";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  return (
    knex(TABLE_NAME)
      // .del()
      .then(() => {
        return knex(TABLE_NAME).insert([
          {
            name: "User 1",
            password:
              "$2b$10$xm48I4u9/4UCaTCfQY1qkubMU14wEXF.cUsCd7sIUhYeBKb27gvS2",
          },
          {
            name: "User 2",
            password:
              "$2b$10$FnsCiKVmXRaaSPTuFlvOIOGuyF7RGvyphReCnL/ppXIRrwesHo3fy",
          },
          {
            name: "User 3",
            password:
              "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
          },
        ]);
      })
  );
}
