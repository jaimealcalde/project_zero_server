import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
    putIngredients,
    deleteIngredients
} from "../controllers/fridge.controller.mjs";

export const fridgeIngredients = Router();

//?GET ALL INGREDIENTS

fridgeIngredients.get("/", getIngredients);

//?ADD INGREDIENT

fridgeIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

fridgeIngredients.put("/", putIngredients);

//?DELETE INGREDIENT

fridgeIngredients.delete("/:fridgeId", deleteIngredients);
