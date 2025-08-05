const router = require("express").Router();

router.get("/get", (req, res) => {
  res.send("hai");
});

module.exports = router;
