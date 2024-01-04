import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
} from "../controllers/fridge.controller.mjs";

export const fir = Router();

//?GET ALL INGREDIENTS

fir.get("/", getIngredients);

//?ADD INGREDIENT

fir.post("/", pushIngredients);

//?MODIFY INGREDIENT

//fir.put("/ingredientId", putIngredients);

//?DELETE INGREDIENT

//fir.delete("/ingredientId", deleteIngredients);
