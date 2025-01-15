const express = require("express");
const app = express();
require("dotenv").config();
const todoRoutes = require("./routes/mainroutes");

const PORT = process.env.PORT || 4000;


app.use(express.json());

app.use("/api/v1", todoRoutes);

app.listen(3000, () => {
    console.log(`Server started successfully at ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect.connectDB();