const router = require("express").Router();
const propertyController = require("../controller/propertyController");
router.get("/get", (req, res) => {
  res.send("hai");
});

router.post("/create", async (req, res) => {
  try {
    const result = await propertyController.bulkCreated(req, res);
    res.status(200).json({ status: "ok", data: result });
  } catch (e) {
    res.status(503).json({ status: "error", data: e.message });
  }
});
module.exports = router;
