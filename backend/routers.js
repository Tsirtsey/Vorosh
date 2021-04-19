const index = require("./components/index/router.js");
const news = require("./components/news/router.js");
const about = require("./components/about/router.js");
const feedback = require("./components/feedback/router.js");
const project = require("./components/project/router.js");
const reception = require("./components/reception/router.js");
const admin = require("./components/admin/router.js");

module.exports  = {
	index:index,
	news:news,
	about:about,
	feedback:feedback,
	project:project,
	reception:reception,
	admin:admin
}