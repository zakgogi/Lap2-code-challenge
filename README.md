### Lap 2 Coding Challenge

## Installation and Usage

# Installation

- clone repo and navigate to folder.
- run `docker compose up`.

# Usage

- visit [localhost:3000](http://localhost:3000/) to view server.
- cd into client folder and run `http-server` or use live server extension to view client.

## Server

# API

- We went for a SQL server using postgre
- Our only useful route on the backend is `/posts` to view all posts
- `/posts` route has a get route to show and a post route to add a new post.

# Database Schema

| Posts     |
| --------- | ------------- | ------------------ |
| id        |               | serial primary key |
| pseudonym | varchar(255)  | Not Null           |
| title     | varchar(100)  | Not Null           |
| body      | varchar(1000) | Not Null           |
| gif       | varchar(500)  |                    |
