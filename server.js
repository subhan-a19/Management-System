const express = require("express");
const app = express();
const router= require("./routers/bookRouter")
const path= require("path")

app.use(express.static("public"));
app.set("views", path.join(__dirname, "views")); //
app.set("view engine", "ejs");

app.use(router)
app.listen(3000);