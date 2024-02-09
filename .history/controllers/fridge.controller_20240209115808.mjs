import Fridge from "../models/fridge.model.mjs";

//?GET ALL INGREDIENTS ingredients.get("/", getIngredients);

export const getIngredients = async (req, res, next) => {
    try {
        const ingredients = await Fridge.find();
        res.json(ingredients);
    } catch (error) {
        console.log(error);
    }
    next();
};

//?ADD INGREDIENT ingredients.push("/", pushIngredients);

export const pushIngredients = async (req, res, next) => {
    try {
        const ingredient = new Fridge({
            ingredient: req.body.ingredient,
            description: req.body.description,
            gluten: req.body.gluten,
            lactose: req.body.lactose,
        });

    await ingredient.save();
        res.status(200).json({ data: "Ingredient created", ingredient });
        console.log(req.body)
    } catch (error) {
        console.log(error);
    }
    next();
};

//?MODIFY INGREDIENT ingredients.put("/ingredientId", putIngredients);

export const putIngredients = async (req, res, next) => {
    try {
        let ingredient = await Frif.findById( req.body.editId );
        let ingredientUpdate = {
            ingredient: req.body.product || ingredient.product,
            description: req.body.description || ingredient.description,
            gluten: ingredient.gluten,
            lactose: ingredient.lactose
        }
        let ingredientToEdit = await Dessert.findOneAndUpdate(
            {_id: ingredient._id},
            ingredientUpdate,
            {new: true}
        );
        res.status(200).json({ data: "Dessert updated", ingredientToEdit });
    } catch (error) {
        console.log(error);
    }
    next();
};

//?DELETE INGREDIENT ingredients.delete("/ingredientId", deleteIngredients);

export const deleteIngredients = async (req, res, next) => {
    try {

        let ingredient = await Fridge.findById( req.params.fridgeId);
        await ingredient.deleteOne();
        res.json({ message: "Fridge deleted" });
    } catch (error) {
        console.log(error);
    }
    next();
};

