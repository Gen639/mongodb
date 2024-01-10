const express = require("express");
const app = express();
const PORT = 3000;
const { dbConnection } = require("./config/config");
app.use(express.json());

dbConnection();
app.use("/products", require("./routes/products"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
