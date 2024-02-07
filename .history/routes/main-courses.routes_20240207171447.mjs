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

//main.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

main.delete("/:mainCoursesId", deleteIngredients);
