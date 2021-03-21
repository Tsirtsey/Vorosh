const Addiction = require("./Addiction.js");

module.exports = (session,fun) => {
	if(session === undefined){
		fun(false);
		return false;
	}
	if(session.id === undefined){
		fun(false);
		return false;
	}
	Addiction.DB.query("SELECT `role` FROM `user` LEFT JOIN `roles` ON `user`.`id`  = `user_id` WHERE `session` = '"+ session.id +"'",(err,response)=>{
		if(response[0]){
			fun(response[0].role)
		}else{
			fun(false);
		}
	});
};
