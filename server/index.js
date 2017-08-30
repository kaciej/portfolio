let express = require("express");
let path = require("path");

//base express app
const app = express();

//setup static files
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`);
});