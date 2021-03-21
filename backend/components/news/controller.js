const express 			= require("express");
const cheerio = require('cheerio');
const request = require("request");

module.exports = {

	actionGetIndex: (req,res) => {
		res.render("index",{
	    	page:{
	    		link:"news/index"
	    	}
	    });
	},

	actionPostParseNews: (req,res) => {
		if(req.body.url === undefined){
			res.send(false);
			return false;
		}
		request({uri: req.body.url}, function(error, response, body) {
			const $ = cheerio.load(body, null, false);
			const imgs = [];
			const text = $('.pi_text');

			text.find(".emoji").each(function () {
				$(this).attr("src",`https://vk.com${$(this).attr("src")}`)
			});
			$("[data-src_big]").each(function () {
				imgs.push($(this).attr("data-src_big"));
			})

			res.send({
				text: text.html(),
				imgs: imgs
			});
		});
	}
};