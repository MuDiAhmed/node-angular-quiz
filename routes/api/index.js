const router = require("express").Router();
const quiz = require("./quiz");

router.use("/quiz", quiz);

module.exports = router;
