const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/post");

const { isAuth, checkReqParamsId } = require("../middleware/index");

router.get("/posts", isAuth, postControllers.getAllPosts);
router.get(
  "/posts/user/:id",
  isAuth,
  checkReqParamsId,
  postControllers.getUserPosts
);
router.get("/post/:id", isAuth, checkReqParamsId, postControllers.getPost);

router.post("/post/", isAuth, postControllers.addPost);

module.exports = router;