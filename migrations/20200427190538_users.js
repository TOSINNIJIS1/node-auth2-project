
exports.up = function(knex) {
  return knex.schema.createTable('users', info => {
      info.increment();
      info.VARCHAR('username').notNullable()
      info.VARCHAR('password').notNullable()
      info.STRING('department').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('users')
};
