const defineRole	= require("./defineRole.js");
const login			= require("./login.js");

module.exports = {

	actionGetIndex: (req,res) => {
		defineRole(req.session,(role) => {
			if(role === "admin"){
				res.render("admin/default",{
					page: { link: "index" }
				}); 
			}else{
				res.redirect('/');
			}
		});
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