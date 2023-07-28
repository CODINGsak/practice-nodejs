"use strict";

//module
const express =  require("express");
const app = express();

//routing
const home = require("./src/routes/home");

//app setting
app.set("views", "./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/",home);//index.js에서 router모듈 받아오기. 미들웨어등록

module.exports = app;
