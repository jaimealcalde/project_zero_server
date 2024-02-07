import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
    de
} from "../controllers/main-courses.controller.mjs";

export const mainCoursesIngredients = Router();

//?GET ALL INGREDIENTS

mainCoursesIngredients.get("/", getIngredients);

//?ADD INGREDIENT

mainCoursesIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

//fridgeIngredients.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

fridgeIngredients.delete("/:mainCoursesId", deleteIngredients);
