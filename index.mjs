import app from "./server.mjs";

import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/zero')
    .then(() => console.log('Db zero connected!'));

app.listen(4000, () => {
    console.log(`Server running at http://localhost:4000`);
    });