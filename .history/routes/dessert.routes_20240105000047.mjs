import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
} from "../controllers/fridge.controller.mjs";

export const dessertIngredients = Router();

//?GET ALL INGREDIENTS

dessertIngredients.get("/", getIngredients);

//?ADD INGREDIENT

dessertIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

//fridgeIngredients.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

//fridgeIngredients.delete("/ingredientId", deleteIngredients);
