CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS hh (
  id SERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  category VARCHAR(255),
  completion BOOLEAN,
  user_id INTEGER REFERENCES users(id)
);
