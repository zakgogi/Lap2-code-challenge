# Lap 2 Coding Challenge

## Installation and Usage

### Installation

- Clone repo and navigate to folder.
- Run `docker compose up`.

### Usage

- Visit [localhost:3000](http://localhost:3000/) to view server.
- Cd into client folder and run `http-server` or use live server extension to view client.

### Resetting

- To reset server and preserve posts that have been inserted by the user, run `docker compose down`.
- To completely teardown server and users posts, run `docker compose down --remove-orphans --volumes`.

## Server

### API

- We went for a SQL server using postgre
- Our only useful route on the backend is `/posts` to view all posts
- `/posts` route has a get route to show posts and a post route to add a new post.

### Database Schema

| Datapoint | Datatype      | Required           |
| --------- | ------------- | ------------------ |
| id        | int           | Serial Primary Key |
| pseudonym | varchar(255)  | Not Null           |
| title     | varchar(100)  | Not Null           |
| body      | varchar(1000) | Not Null           |
| gif       | varchar(500)  | Can Be Null        |
