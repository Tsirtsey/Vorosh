const Addiction = require("./Addiction.js");

module.exports = (req,res) => {

	let regexp = new RegExp(/\<|\>|\"|\'|\;|\$|\{|\}|\[|\]|\(|\)/g);

	if(regexp.test(req.body.login)){
		res.send("forbidden symbols");
		return false;
	}

	let pass_hesh = Addiction.Crypto.createHash("md5").update(req.body.password).update(Addiction.Config.secret).digest("hex");

	Addiction.DB.query("SELECT `id`,`password_hesh`,`email_active` FROM `user` WHERE `login` = '"+ req.body.login +"' OR `email` = '"+ req.body.login +"' ;", function(err, response, meta){
		if (response === undefined){
			res.send("Неверный логин");
			return false;
		}
		if(response.length <= 0) {
			res.send("Неверный логин");
			return false;
		}
		if(pass_hesh !== response[0].password_hesh){
			res.send("Неверный пароль");
			return false;
		}

		let session_id = Addiction.Crypto.randomBytes(16).toString("hex");

		Addiction.DB.query("UPDATE `user` SET `session`= '"+ session_id +"' WHERE `id`= '"+ response[0].id +"';",()=>{
			req.session.id = session_id;
			res.send(true);
		})
	});
};
