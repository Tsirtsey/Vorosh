const express 			= require("express");

module.exports ={

	actionGetIndex: (req,res) => {
		res.render("index",{
	    	page:{
	    		link:"layouts/main"
	    	}
	    });
	},

	actionGetIndexOther: (req,res) => {
		res.status(404).render("index",{
	    	page:{
	    		link:"layouts/404"
	    	}
	    });
	}
};