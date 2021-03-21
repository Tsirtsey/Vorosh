const Addiction = require("./Addiction.js");

module.exports = (session,fun) => {
	if(session !== undefined){
		if(session.id !== undefined){
			Addiction.DB.query("SELECT `role` FROM `user` LEFT JOIN `roles` ON `user`.`id`  = `user_id` WHERE `session` = '"+ session.id +"'",(err,response)=>{
				if(response[0]){
					fun(response[0].role)
				}else{
					fun(false);
				}
			});
		}else{
			fun(false);
		}
	}else{
		fun(false);
	}
};
