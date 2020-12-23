import { Express } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import {
  APP_VERSION,
  APP_NAME,
  PORT,
  CODE_FOLDER,
  ROUTE_WILDCARD,
} from "../constants/environment";
const swaggerDocumentationOptions: swaggerJsDoc.Options = {
  definition: {
    info: {
      title: `${APP_NAME} Api`,
      version: APP_VERSION || "0.0.1",
      description: `${APP_NAME} Api Documentation`,
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: [ROUTE_WILDCARD],
};

export default (app: Express) => {
  const swaggerDocumentation = swaggerJsDoc(swaggerDocumentationOptions);
  app.use(
    "/swagger",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDocumentation, {
      customfavIcon: `../favicon.ico`,
    })
  );
};
