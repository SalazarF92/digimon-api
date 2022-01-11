import axios from "axios";
import { Router } from "express";
import { resourceUsage } from "process";
import { digimonRepository } from "../repository/digimonRepository";

const router = Router();

// async function getApiDigi() {
//   const result = await axios.get('https://digimon-api.herokuapp.com/api/digimon')
// }
// getApiDigi()

router.get("/list", async (req, res) => {
  try {
    const result = await digimonRepository.getAll();
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.post("/add", async (req,res) => {
  const {name, img, level} = req.body;
  // console.log(req.body)

  try {
    const result = await digimonRepository.addAll(name, img, level)
    res.json(result)
  } catch (err) {
    res.json({error: err.message})
  }

  
})

export default router;
