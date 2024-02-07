import pkg from "mongoose";
const { Schema, model } = pkg;

const DessertSchema = new Schema({
    id:
    ingredient: {
        type: String,
    },
    description: {
        type: String,
    },
    gluten: {
        type: Boolean,
    },
    lactose: {
        type: Boolean,
    }
});

export default model("dessert", DessertSchema);