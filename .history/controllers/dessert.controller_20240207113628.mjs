import Dessert from "../models/dessert.controller.mjs";

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
        const ingredient = new Dessert({
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



//?DELETE INGREDIENT ingredients.delete("/desserttId", deleteDessert);

export const deleteIngredients = async (req, res, next) => {
    try {
        console.log(re);
        const ingredient = await Dessert.findById(req.params.dessertId);
        console.log("ingrediente: " + ingredient)
        await ingredient.remove();
        res.json({ message: "Dessert deleted" });
    } catch (error) {
        console.log(error);
    }
    next();
};
