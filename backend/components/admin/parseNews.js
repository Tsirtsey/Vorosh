const Addiction = require("./Addiction.js");

module.exports = (req,res) => {
	Addiction.ParseNews(req.body.url,(result)=>{
		if(!result){
			res.send(false);
		}
		Addiction.DB.query("INSERT INTO `news` (`img`, `title`, `text`) VALUES ('"+result.img+"', '"+result.title+"', '"+result.text+"');",()=>{
			
			res.send(true);
		})
	});
};