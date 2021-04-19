const express = require("express");
const ControllerFeedback = require("./controller.js");
const router = express.Router();

router.get("/",function(req,res){
	ControllerFeedback.actionGetIndex(req,res)
});


module.exports = router;