const express = require("express");
const router = express.Router();

// GET cool page
router.get("/", (req, res, next) => {
	res.render("cool", { title: "You're so cool" });
});

module.exports = router;
