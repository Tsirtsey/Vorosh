const express = require("express");
const ControllerReception = require("./controller.js");
const router = express.Router();

router.get("/",function(req,res){
	ControllerReception.actionGetIndex(req,res)
});


module.exports = router;