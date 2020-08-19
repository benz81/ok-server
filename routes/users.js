const express = require("express");
const auth = require("../middleware/auth");
const { createUser } = require("../controllers.js/users");

const route = express.Router();

router.route("/").post(createUser);

module.exports = router;
