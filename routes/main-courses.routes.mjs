import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
    putIngredients,
    deleteIngredients
} from "../controllers/main-courses.controller.mjs";

export const mainCoursesIngredients = Router();

//?GET ALL INGREDIENTS

mainCoursesIngredients.get("/", getIngredients);

//?ADD INGREDIENT

mainCoursesIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

mainCoursesIngredients.put("/", putIngredients);

//?DELETE INGREDIENT

mainCoursesIngredients.delete("/:mainCoursesId", deleteIngredients);
