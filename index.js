const express = require("express");
const app = express();
require("dotenv").config();
const todoRoutes = require("./routes/mainroutes");



app.use(express.json());

app.use("/api/v1", todoRoutes);

app.listen(4000, () => {
    console.log(`Server started successfully at 4000`);
})

const dbConnect = require("./config/database");
dbConnect.connectDB();