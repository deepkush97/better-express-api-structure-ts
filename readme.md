# Better Express API Structure

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
  - [helmet](https://www.npmjs.com/package/helmet) : To secure the app by setting various HTTP headers.
  - [express-bouncer](https://www.npmjs.com/package/express-bouncer) : To mitigate brute-force attacks.
- To run the typescript in development, I used the [nodemon](https://www.npmjs.com/package/nodemon) + [ts-node](https://www.npmjs.com/package/ts-node) combo.

## Usage

- The application provides some scripts for building and running the application in development and production.

```json
    "dev": "nodemon src/app.ts",
    "pre-build": "rm -rf ./dist/",
    "build": "npm run pre-build && tsc -p . && npm run post-build",
    "post-build": "cp -r ./src/public ./dist/public",
    "start": "node dist/app.js"
```

- Update the .env as per your configuration.

- Also, when you use nodemon for debugging/hot-reloading the application, please change the `APP_ENVIRONMENT` to `development`.

```dosini
# .env
APP_ENVIRONMENT=development
```

- `/swagger` to get the swagger API documentation page, where all the dummy api will be shown.

_Check the .env for the `APP_ENVIRONMENT` value, change the value as in `development` or `production`_

## Open Issues

- Don't know which will be good practice to export and imports.
- Configure Cookie Parser for the following in typescript

```js
app.use(cookieParser(COOKIE_SECRET, {
  secure: true,
  httpOnly: true,
  domain: DOMAIN,
  expires:
}));
```

## Next Steps

- Improvise the project by establishing some security aspects of node.

---

_For any suggestions, or bugs, please raise issues._
