/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('aluno', (table) => {
    table.bigIncrements('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('nacionalidade').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('aluno');
};
