import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
} from "../controllers/entrees.controller.mjs";

export const entreesIngredients = Router();

//?GET ALL INGREDIENTS

entreesIngredients.get("/", getIngredients);

//?ADD INGREDIENT

entreesIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

//entreesIngredients.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

entreesIngredients.delete("/:entreeId", deleteIngredients);
