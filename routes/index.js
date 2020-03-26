const router = require("express").Router();
const api = require("./api");

router.use("/api", api);
router.get("*", (req, res) => {
  return res.render("index.html");
});

module.exports = router;
