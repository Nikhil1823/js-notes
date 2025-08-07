const express = require("express");
const cors = require("cors");
const propertyRouter = require("./router/property.routes");
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["get"],
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", data: "server is alive" });
});
app.use("/property", propertyRouter);

app.listen(8080, () => {
  console.log("server running at port : 8080 ");
});
