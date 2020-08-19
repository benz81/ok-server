const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const users = "./routes/users";

const app = express();

app.use("/api/v1/users", users);

const PORT = process.env.PORT || 5323;
app.listen(PORT, console.log("서버 가동"));
