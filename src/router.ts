import * as express from "express";
import digimonRouter from "./router/digimonRouter";

const router = express.Router();


router.use("/digimon", digimonRouter);

router.get("/", (req, res) => {
  res.json({
    digimon: "1.0",
  });
});

export default router;
