const express = require("express");
const ControllerNews = require("./controller.js");
const router = express.Router();

router.get("/",function(req,res){
	ControllerNews.actionGetIndex(req,res)
});


module.exports = router;