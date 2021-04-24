const Addiction 	= require("./Addiction.js");
const defineRole	= require("./defineRole.js");
const login			= require("./login.js");
const parseNews		= require("./parseNews.js");

function isAdmin(req, callback){
	defineRole(req.session,(role) => {
		if(role === "admin"){
			callback();
		}else{
			res.redirect('/');
		}
	});
}

module.exports = {

	actionGetIndex: (req,res) => {
		isAdmin(req,()=>{
			res.render("admin/default",{
				page: { link: "index" }
			}); 
		})
	},

	actionGetNews: (req,res) => {
		isAdmin(req,()=>{
			Addiction.DB.query("SELECT * FROM `news`;",(err, response, meta)=>{
				res.render("admin/default",{
			    	page:{
			    		link:"news", news: response
			    	}
			    });
			})
		})
	},

	actionPostNews: (req,res) => {
		parseNews(req,res);
	},

	actionGetLogin: (req,res) => {
		res.render("admin/default",{
			page:{
				auth: true
			}
		});
	},

	actionPostLogin: (req,res) => {
		login(req,res);
	}
	
};