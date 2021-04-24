const express 			= require("express");
const Addiction 		= require("./Addiction.js");
module.exports = {

	actionGetIndex: (req,res) => {
		res.render("index",{
	    	page:{
	    		link:"feedback/index"
	    	}
	    });
	},

	actionPostIndex: (req, res) => {
		Addiction.DB.query("INSERT INTO `feedback`(`fio`, `address`, `email`, `tel`, `theme`, `text`) VALUES ('"+req.body.fio+"','"+req.body.address+"','"+req.body.email+"','"+req.body.tel+"','"+req.body.theme+"','"+req.body.text+"');",(err,response,meta)=>{
			res.render("index",{
		    	page:{
		    		link:"feedback/index"
		    	}
		    });
		})
	},
};