import express from "express";
import loaders from "./loaders";
const startServer = (portNumber: number) => {
  const app = express();
  loaders(app);
  app.listen(portNumber, () => {
    console.log(`Server started at port number : ${portNumber}`);
  });
};

const { PORT } = process.env;
startServer(parseInt(PORT || "8086"));
