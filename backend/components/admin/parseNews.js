const Addiction = require("./Addiction.js");

module.exports = (req,res) => {
	Addiction.ParseNews(req.body.url,(result)=>{
		if(!result){
			res.send("no save");
		}
		Addiction.DB.query("INSERT INTO `news` (`img`, `title`, `text`) VALUES ('"+result.img+"', '"+result.title+"', '"+result.text+"');",()=>{
			
			res.send("save");
		})
	});
};