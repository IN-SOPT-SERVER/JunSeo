import express, { Router } from "express";

const router: Router = express.Router();

// /api/user
router.use("/user", require("./user"));

module.exports = router;
