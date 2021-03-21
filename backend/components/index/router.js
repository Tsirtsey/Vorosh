const express = require("express");
const ControllerIndex = require("./controller.js");
const router = express.Router();

router.get("/",function(req,res){
	ControllerIndex.actionGetIndex(req,res)
});

router.get("/*",function(req,res){
	ControllerIndex.actionGetIndexOther(req,res)
});

		

module.exports = router;