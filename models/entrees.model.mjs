import pkg from "mongoose";
const { Schema, model } = pkg;

const EntreesSchema = new Schema({
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

export default model("entrees", EntreesSchema);