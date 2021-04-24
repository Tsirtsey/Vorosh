const cheerio = require('cheerio');
const request = require("request");

module.exports = (url,callback) => {
	let RegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

	if(url === undefined || !RegExp.test(url)){
		callback(false);
		return false;
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