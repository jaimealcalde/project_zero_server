import express from "express";
import morgan from "morgan";
import cors from "cors";

import { fridgeIngredients } from "./routes/fridge.routes.mjs";
import { entreesIngredients } from "./routes/entrees.routes.mjs";
import { mainCoursesIngredients } from "./routes/main-courses.routes.mjs";

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

app.use("/api/fridge", fridgeIngredients);
app.use("/api/entrees", entreesIngredients);
app.use("/api/mainCourses", mainCoursesIngredients);
app.use("/api/dessert", dessertIngredients);

export default app;