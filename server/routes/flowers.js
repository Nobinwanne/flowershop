import express from "express";
import fs from "fs";

const router = express.Router();

const readJsonData = () => {
  const flowerData = fs.readFileSync("./data/flowers.json");
  const flowerDataJSON = JSON.parse(flowerData);
  return flowerDataJSON;
};

router.get("/", (_req, _res) => {
  const flowersDataJSON = readJsonData();
  console.log(flowersDataJSON);
  _res.send("link working");
});

export default router;
