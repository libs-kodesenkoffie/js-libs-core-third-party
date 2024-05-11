export const databaseCommands = {
  CREATE: `
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'db_name') THEN
        CREATE DATABASE db_name;
    END IF;
END $$;`, // cannot be executed from a function
  // psql -U postgres -c "CREATE DATABASE IF NOT EXISTS db_name"
};

export const userTable1 = {
  CREATE: `CREATE TABLE IF NOT EXISTS"user" (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`,
  DELETE: `DROP TABLE IF EXISTS "user";`,
};
