const express = require("express");

const propertyRouter = require("./router/property.routes");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is alive");
});
app.use("/property", propertyRouter);

app.listen(8080, () => {
  console.log("server running at port : 8080 ");
});
