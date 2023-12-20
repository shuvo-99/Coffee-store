const expres = require("express");
const cors = require("cors");
const app = expres();
const port = process.env.PORT || 5000;

// ===== middleware =====
app.use(cors());
app.use(expres.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server runnings on port ${port}`);
});
