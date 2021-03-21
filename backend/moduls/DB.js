const mysql = require("mysql2");
const config_db = require("./../config-db.js");

const db = mysql.createPool({
  host: config_db.host,
  user: config_db.user,
  database: config_db.database,
  password: config_db.password
});

class DB{
	static async queryPromise(inquiry){
		return await new Promise((resolve,reject)=>{
			db.query(inquiry,(err, response, meta)=>{
				if(err){
					reject(err);
				};
				resolve({err:err,response:response,meta:meta});
			});
		});
	}
	static async query(inquiry,callback=()=>{}){
		db.query(inquiry,(err, response, meta)=>{
			if(err){
				console.log(err);
			};
			callback(err,response,meta);
		});
	}
}


module.exports = DB;