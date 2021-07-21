DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    pseudonym varchar(255) NOT NULL,
    title varchar(100) NOT NULL, 
    body varchar(1000) NOT NULL, 
    gif varchar(500)
);
