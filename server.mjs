import express from "express";
import morgan from "morgan";

import { ingredients } from "./routes/fridge.routes.mjs";

const app = express();

//? MIDDLEWARES

app.use(morgan("dev"));
app.use(express.json());

//? ROUTES

app.use("/api/fridge", ingredients);

export default app;