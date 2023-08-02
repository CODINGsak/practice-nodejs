"use strict";

//module
const express =  require("express");
const bodyParser = require("body-parser");
const app = express();

//routing
const home = require("./src/routes/home");

//app setting
app.set("views", "./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// url을 통해 전달되는 데이터에 한글, 공백등과 
// 같은문자가 있을경우 인식되지 않는 문제해결
app.use(bodyParser.urlencoded({extended : true}));

app.use("/",home);//index.js에서 router모듈 받아오기. 미들웨어등록

module.exports = app;
