/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('city').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      })
      .createTable('dogs', (table) => {
        table.increments('id').primary();
        table
            // .foreign('users_id')
            .integer('user_id').unsigned().notNullable()
            // .references('users.id')
            // .onUpdate('CASCADE')
            // .onDelete('CASCADE');
        table.foreign('user_id').references("id").inTable("users").onUpdate('CASCADE').onDelete('CASCADE');
        table.string('name').notNullable();
        table.string('age').notNullable();
        table.string('breed').notNullable();
        table.string('personality').notNullable();
        table.string('picture').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      });
  
};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('users').dropTable('dogs');
  
};
