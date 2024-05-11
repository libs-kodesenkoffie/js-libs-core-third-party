import knex from 'knex';

export const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'test_user',
    password: 'Password@123',
    database: 'test_db',
  },
});
