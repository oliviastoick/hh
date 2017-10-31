
-- DROP TABLE IF EXISTS happyHourVendors;
-- CREATE TABLE IF NOT EXISTS happyHourVendors (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255) UNIQUE NOT NULL,
--   password_digest TEXT,
--   email VARCHAR(255)
-- );

-- CREATE TABLE IF NOT EXISTS hh (
--   id SERIAL PRIMARY KEY,
--   title TEXT,
--   description TEXT,
--   category VARCHAR(255),
--   completion BOOLEAN,
--   user_id INTEGER REFERENCES users(id)
-- );




DROP TABLE IF EXISTS happyHourVendors;
CREATE TABLE IF NOT EXISTS happyHourVendors(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    hours VARCHAR,
    img VARCHAR,
    location TEXT,
    specials TEXT
);


CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    name VARCHAR
);

ALTER TABLE favoriterecipes
ADD COLUMN user_id INTEGER REFERENCES users(id);
