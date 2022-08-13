const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// api connect
app.use("/v1/api", require("./routers/routersController"));

// PORT
const PORT = process.env.PORT | 5002;
app.listen(PORT, () => console.log(`Listening on port ==> ${PORT}...`));
