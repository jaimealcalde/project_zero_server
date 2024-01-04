import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
} from "../controllers/entrees.controller.mjs";

export const ingredients = Router();

//?GET ALL INGREDIENTS

entreesIngrediewnts.get("/", getIngredients);

//?ADD INGREDIENT

entreesIngrediewnts.post("/", pushIngredients);

//?MODIFY INGREDIENT

//entreesIngrediewnts.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

//entreesIngrediewnts.delete("/ingredientId", deleteIngredients);
