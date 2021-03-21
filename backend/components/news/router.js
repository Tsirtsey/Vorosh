const express = require("express");
const ControllerNews = require("./controller.js");

var request = require("request");


const router = express.Router();

router.get("/",function(req,res){
	ControllerNews.actionGetIndex(req,res)
});

router.get("/get-news?:url",function(req,res){
	console.log(req.query.url);
	if(req.query.url !== undefined){
		request({uri: req.query.url}, function(error, response, body) {
			console.log(body);
		});
	}

	ControllerNews.actionGetNews(req,res);
});

		

module.exports = router;