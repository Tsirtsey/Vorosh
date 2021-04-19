const express = require("express");
const ControllerAbout = require("./controller.js");
const router = express.Router();

router.get("/",function(req,res){
	ControllerAbout.actionGetIndex(req,res)
});


module.exports = router;