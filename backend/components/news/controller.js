const express 			= require("express");

module.exports = {

	actionGetIndex: (req,res) => {
		res.render("index",{
	    	page:{
	    		link:"news/index"
	    	}
	    });
	},

};