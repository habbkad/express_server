const express = require("express");
const { home, aboutRoute, aboutsRoute } = require("../controllers/controller");
const router = express.Router();

router.route("/").get(home);
router.route("/about").get(aboutRoute);
router.route("/about/us").get(aboutsRoute);

module.exports = router;
