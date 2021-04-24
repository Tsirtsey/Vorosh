const express = require("express");
const ControllerFeedback = require("./controller.js");
const router = express.Router();

router.get("/",function(req,res){
	ControllerFeedback.actionGetIndex(req,res)
});

router.post("/",function(req,res){
	ControllerFeedback.actionPostIndex(req,res)
});

module.exports = router;