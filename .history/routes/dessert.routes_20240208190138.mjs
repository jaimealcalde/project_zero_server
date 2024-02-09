import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
    deleteIngredients
} from "../controllers/dessert.controller.mjs";

export const dessertIngredients = Router();

//?GET ALL INGREDIENTS

dessertIngredients.get("/", getIngredients);

//?ADD INGREDIENT

dessertIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

fridgeIngredients.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

dessertIngredients.delete("/:dessertId", deleteIngredients );
