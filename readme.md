# Better Project Structure

## Introduction

- In today's node development, most of the time we tend to create an web api server and all the things around it (mostly).
- We have a certain steps of work needs to be done before actually work on your project, like creating the web server, attaching the api endpoints to it, error handling middlewares and all.
- Also, it have to be in proper structure with all the things segregated from one another.
- To do all this things we utilize the first couple of hours in it.
- Bonus steps will be added to create the development with typescript.
- So, to eradicate this problem, I have created this repository.

## Overview

- This is a web server with [typescript](https://www.typescriptlang.org/).
- Below are the packages used in this project.
  - [express](https://expressjs.com/) : Fast, unopinionated, minimalist web framework for Node.js
  - [cookie-parser](https://www.npmjs.com/package/cookie-parser) : To get the cookies from the request in the request.cookies.
  - [cors](https://www.npmjs.com/package/cors) : To enable CORS.
  - [morgan](https://www.npmjs.com/package/morgan) : HTTP request logger middleware.
  - [dotenv](https://www.npmjs.com/package/dotenv) : To load the environment variables from .env files into process.env.
  - [swagger-jsdoc](https://www.npmjs.com/package/morgan) : Reads the JSDoc-annotated source code and generates an OpenAPI(Swagger) specification.
  - [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) : To serve auto-generated swagger-ui generated API docs from express.
- To run the typescript in development, I used the [nodemon](https://www.npmjs.com/package/nodemon) + [ts-node](https://www.npmjs.com/package/ts-node) combo.

## Open Issues

- Don't know which will be good practice to export and imports.

## Next Steps

- Improvise the project by establishing some security aspects of node.
