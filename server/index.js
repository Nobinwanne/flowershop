import express from "express";
import cors from "cors";
import "dotenv/config";
import flowersRoute from "./routes/flowers.js";

const { PORT } = process.env;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/flowers", flowersRoute);

app.get("/", (_req, _res) => _res.send("Welcome to Flower Shop"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
