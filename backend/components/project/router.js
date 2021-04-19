const express = require("express");
const ControllerProject = require("./controller.js");
const router = express.Router();

router.get("/",function(req,res){
	ControllerProject.actionGetIndex(req,res)
});


module.exports = router;