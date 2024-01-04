import express from "express";
import morgan from "morgan";
import cors from "cors";

import { fri } from "./routes/fridge.routes.mjs";

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

app.use("/api/fridge", fri);
app.use("/api/entrees", ingredients);


export default app;