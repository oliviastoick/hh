
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

