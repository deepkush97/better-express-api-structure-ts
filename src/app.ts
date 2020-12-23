import express from "express";
import loaders from "./loaders";
import { PORT } from "./constants/environment";
const startServer = (portNumber: number) => {
  const app = express();
  loaders(app);
  app.listen(portNumber, () => {
    console.log(`Server started at port number : ${portNumber}`);
  });
};

startServer(parseInt(PORT || "8086"));
