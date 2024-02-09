import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
    putIngredients,
    deleteIngredients
} from "../controllers/dessert.controller.mjs";

export const dessertIngredients = Router();

//?GET ALL INGREDIENTS

dessertIngredients.get("/", getIngredients);

//?ADD INGREDIENT

dessertIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

dessertIngredients.put("/", putIngredients);

//?DELETE INGREDIENT

dessertIngredients.delete("/:dessertId", deleteIngredients );
