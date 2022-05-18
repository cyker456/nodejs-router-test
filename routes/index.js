var express = require("express");
var router = express.Router();
var path = require("path");
/* GET home page */
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
  //   res.render("/index", { title: "express" });
});
router.get("/hello", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "/public/Hello.html"));
});
router.get("/test", (req, res, next) => {
  res.render("test", { title: "ejs test" });
});
module.exports = router;
