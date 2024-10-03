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
  _res.send(flowersDataJSON);
});

router.get("/:flowerId", (_req, _res) => {
  const flowerId = parseInt(_req.params.flowerId, 10);
  const flowersDataJSON = readJsonData();
  const selectedFlower = flowersDataJSON.find((data) => {
    return data.id === flowerId;
  });
  console.log(selectedFlower);
  _res.send(selectedFlower);
});

router.post("/search", (_req, _res) => {
  console.log(_req.body);

  const { name, meaning } = _req.body;
  if (!name && !meaning) {
    return _res
      .status(400)
      .send("Please provide either a name or a meaning to search."); // Return a 400 status with a message
  }
  console.log(name, meaning);
  const flowersDataJSON = readJsonData();

  // Create a regular expression for the meaning search
  const meaningRegex = meaning ? new RegExp(meaning, "i") : null; // 'i' for case-insensitive search
  console.log(meaningRegex);

  const matchingFlowers = flowersDataJSON.filter((data) => {
    const nameMatches = name && data.name.toLowerCase() === name.toLowerCase(); // Check by name
    const meaningMatches =
      meaningRegex && data.meaning.some((m) => meaningRegex.test(m)); // Check by meaning using regex

    return nameMatches || meaningMatches; // Return true if either condition matches
  });

  console.log(matchingFlowers);
  if (matchingFlowers.length > 0) {
    _res.json(matchingFlowers); // Send back the array of matching flowers
  } else {
    _res.status(404).send("No flowers found matching the criteria"); // Return 404 if not found
  }
});

export default router;
