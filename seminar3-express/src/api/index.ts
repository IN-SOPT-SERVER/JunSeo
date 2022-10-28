import express, { Router } from "express";

const router: Router = express.Router();

//~ /contents
router.use("/contents", require("./content"));

module.exports = router;
