# Better Project Structure

## Introduction

- In today's node development, most of the time we tend to create an web api server and all the things around it (mostly).
- We have a certain steps of work needs to be done before actually work on your project, like creating the web server, attaching the api endpoints to it, error handling middlewares and all.
- Also, it have to be in proper structure with all the things segregated from one another.
- To do all this things we utilize the first couple of hours in it.
- Bonus steps will be added to create the development with typescript.
- So, to eradicate this problem, I have created this repository.

## Overview

- This is a web server with typescript.
- Below are the packages used in this project.
  - [express](https://expressjs.com/) : Fast, unopinionated, minimalist web framework for Node.js
  - [cookie-parser](https://www.npmjs.com/package/cookie-parser) : To get the cookies from the request in the request.cookies.
  - [cors](https://www.npmjs.com/package/cors) : To enable CORS.
  - [morgan](https://www.npmjs.com/package/morgan) : HTTP request logger middleware.
- To run the typescript in development, I used the [nodemon](https://www.npmjs.com/package/nodemon) + [ts-node](https://www.npmjs.com/package/ts-node) combo.

## Open Issues

- Don't know which will be good practice to export and imports.

## Next Steps

- Establishing a webpack for optimised build for js counterpart.
- Configure the SwaggerUI for api documentation.
- Add a react app for the frontend, utilizing this api, and its best project structure.
- Creating the react app optimized build.
- Packing both the react app and the server in a single executable for offline deployment.
