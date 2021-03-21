const express 			= require("express");

class ControllerIndex{

	static actionGetIndex(req,res){
		res.render("index",{
	    	page:{
	    		link:"layouts/main"
	    	}
	    });
	}

	static actionGetIndexOther(req,res){
		res.status(404).render("index",{
	    	page:{
	    		link:"layouts/404"
	    	}
	    });
	}
}

module.exports = ControllerIndex;