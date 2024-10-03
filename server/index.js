import express from "express";
import cors from "cors";
import "dotenv/config";

const { PORT } = process.env;

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => res.send("Welcome to /"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
