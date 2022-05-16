"use strict";

const express = require("express");
const app = express();

//라우팅 파일주소
const home = require("./routes/home");

//홈페이지 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;