import { Router } from "express";

import {
    getIngredients,
    pushIngredients,
    p
    deleteIngredients
} from "../controllers/entrees.controller.mjs";

export const entreesIngredients = Router();

//?GET ALL INGREDIENTS

entreesIngredients.get("/", getIngredients);

//?ADD INGREDIENT

entreesIngredients.post("/", pushIngredients);

//?MODIFY INGREDIENT

entreesIngredients.put("/", putIngredients);

//?DELETE INGREDIENT

entreesIngredients.delete("/:entreeId", deleteIngredients);
