const express 			= require("express");
const Addiction 		= require("./Addiction.js");

module.exports ={

	actionGetIndex: (req,res) => {
		Addiction.DB.query("SELECT * FROM `news`;",(err, response, meta)=>{
			res.render("index",{
		    	page:{
		    		link:"layouts/main", news: response
		    	}
		    });
		})
	},

	actionGetIndexOther: (req,res) => {
		res.status(404).render("index",{
	    	page:{
	    		link:"layouts/404"
	    	}
	    });
	}
};