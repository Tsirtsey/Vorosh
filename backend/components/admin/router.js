const express = require("express");
const ControllerAdmin = require("./controller.js");
const router = express.Router();

router.get('/',(req,res)=>{
	ControllerAdmin.actionGetIndex(req,res);
});

router.get('/news',(req,res)=>{
	ControllerAdmin.actionGetNews(req,res);
});

router.post('/news',(req,res)=>{
	ControllerAdmin.actionPostNews(req,res);
});

router.get('/feedback',(req,res)=>{
	ControllerAdmin.actionGetFeedback(req,res);
});

router.get('/login',(req,res)=>{
	ControllerAdmin.actionGetLogin(req,res);
});

router.post('/login',(req,res)=>{
	ControllerAdmin.actionPostLogin(req,res);
});



module.exports = router;