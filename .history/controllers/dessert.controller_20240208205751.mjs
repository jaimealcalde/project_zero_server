import Dessert from "../models/dessert.model.mjs";

//?GET ALL INGREDIENTS ingredients.get("/", getIngredients);

export const getIngredients = async (req, res, next) => {
    try {
        const ingredients = await Dessert.find();
        res.json(ingredients);
    } catch (error) {
        console.log(error);
    }
    next();
};

//?ADD INGREDIENT ingredients.push("/", pushIngredients);

export const pushIngredients = async (req, res, next) => {
    try {
        let ingredient = new Dessert({
            ingredient: req.body.ingredient,
            description: req.body.description,
            gluten: req.body.gluten,
            lactose: req.body.lactose,
        });

    await ingredient.save();
        res.status(200).json({ data: "Ingredient created", ingredient });
        console.log(ingredient)
    } catch (error) {
        console.log(error);
    }
    next();
};

//?MODIFY INGREDIENT ingredients.put("/ingredientId", putIngredients);

export const putIngredients = async (req, res, next) => {
    try {
        let ingredient = await Dessert.findById( req.body.editId );
        console.log(ingredient);
        let ingredientUpdate = {
            _id: ingredient._id,
            product: ingredient.product,
            description: ingredient.description,
        }
    } catch (error) {
        console.log(error);
    }
    next();
};

//?DELETE INGREDIENT ingredients.delete("/desserttId", deleteDessert);

export const deleteIngredients = async (req, res, next) => {
    try {
        let ingredient = await Dessert.findById( req.params.dessertId);
        await ingredient.deleteOne();
        res.json({ message: "Dessert deleted" });
    } catch (error) {
        console.log(error);
    }
    next();
};
