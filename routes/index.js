var express = require("express");
var router = express.Router();
const User = require("../models/UsersModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.send({
    message: "Hello world",
  });
});

module.exports = router;