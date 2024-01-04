import express from "express";
import morgan from "morgan";
import cors from "cors";

import { fridge, ingredients } from "./routes/fridge.routes.mjs";
import { entrees } from "./routes/entrees.routes.mjs";

const app = express();

//? MIDDLEWARES

app.use(morgan("dev"));
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:4200",
    })
);

//? ROUTES

app.use("/api/fridge", ingredients);
app.use("/api/entrees", entrees);


export default app;