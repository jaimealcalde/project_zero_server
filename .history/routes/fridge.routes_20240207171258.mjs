import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
} from "../controllers/fridge.controller.mjs";

export const fridgeIngredients = Router();

//?GET ALL INGREDIENTS

fridgeIngredients.get("/", getIngredients);

//?ADD INGREDIENT

fridgeIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

//fridgeIngredients.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

fridgeIngredients.delete("/ingredientId", deleteIngredients);
