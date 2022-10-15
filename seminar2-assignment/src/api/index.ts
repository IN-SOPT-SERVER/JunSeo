import express, { Router } from "express";

const router: Router = express.Router();

//~ /api/user
router.use("/user", require("./user"));

//~ /api/blog
router.use("/blog", require("./blog"));

//~ /api/comment
router.use("/comment", require("./comment"));

//~ /api/movie
router.use("/movie", require("./movie"));

//~ /api/members
router.use("/members", require("./members"));

module.exports = router;
