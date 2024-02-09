import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
    deleteIngredients
} from "../controllers/main-courses.controller.mjs";

export const mainCoursesIngredients = Router();

//?GET ALL INGREDIENTS

mainCoursesIngredients.get("/", getIngredients);

//?ADD INGREDIENT

mainCoursesIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

mainCoursesIngredients.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

mainCoursesIngredients.delete("/:mainCoursesId", deleteIngredients);
