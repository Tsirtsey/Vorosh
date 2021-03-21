const express = require("express");
const ControllerNews = require("./controller.js");
const router = express.Router();

router.get("/",function(req,res){
	ControllerNews.actionGetIndex(req,res)
});

router.post("/parse-news",function(req,res){
	ControllerNews.actionPostParseNews(req,res);
});

		

module.exports = router;