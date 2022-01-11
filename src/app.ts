import router from "./router";
var cors = require("cors");

const express = require("express");
const bp = require("body-parser");
export const app = express();
const PORT = 8000;
app.use(bp.json());
app.use(cors()); // Use this after the variable declaration
app.use(router);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

// import path from "path";
// import { createExpressServer } from "routing-controllers";
// import { DigimonController } from "./controllers/digimonController";

// const app = createExpressServer({ controllers: [path.join(__dirname, "./**/controllers/*Controller{.ts,.js}")] });
// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
// });
