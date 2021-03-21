const express = require("express");
const config  = require("./config.js");
const partials = require('express-partials');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const routers = require("./routers.js");
const app = express();


app.set('views', config.views_path);
app.set('view engine', 'ejs');

app.use(partials());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(cookieSession({
    name: "session",
    secret: config.cookie_secret,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      path: "/",
      secure: false
    }
  }));
config.static_dir.forEach((path)=>{
  app.use(express.static(path));
});


app.use('/admin',routers.admin);
app.use('/news',routers.news);
app.use('/',routers.index);

app.listen(config.port);