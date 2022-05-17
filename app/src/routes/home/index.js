"use strict";

const express = require("express");
const router  = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home); 

router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

//exports를 통하여 router를 외부에서도 사용가능하게 만듬
module.exports = router;