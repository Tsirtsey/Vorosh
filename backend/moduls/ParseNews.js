const cheerio = require('cheerio');
const request = require("request");

module.exports = (url,callback) => {
	if(url === undefined){
		callback(false);
	}
	return request({uri: url}, function(error, response, body) {
		const $ = cheerio.load(body, null, false);
		const img = $($("[data-src_big]").get(0)).attr("data-src_big");
		const text = $('.pi_text');

		text.find(".emoji").each(function () {
			$(this).attr("src",`https://vk.com${$(this).attr("src")}`)
		});

		callback({
			text: text.html(),
			img: img
		});
	});
}