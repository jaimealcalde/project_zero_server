import pkg from "mongoose";
const { Schema, model } = pkg;

const FridgeSchema = new Schema({
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

export default model("fridge", FridgeSchema);