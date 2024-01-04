import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
} from "../controllers/entrees.controller.mjs";

export const ingredients = Router();

//?GET ALL INGREDIENTS

ingredients.get("/", getIngredients);

//?ADD INGREDIENT

ingredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

//ingredients.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

//ingredients.delete("/ingredientId", deleteIngredients);
