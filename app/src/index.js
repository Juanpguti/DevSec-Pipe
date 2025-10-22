const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "demo-secure-api" });
});

app.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, secure world!" });
});

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`API listening on :${port}`));
}

// ⚠ Vulnerabilidad simulada
const userInput = "2 + 2";
const result = eval(userInput);
console.log("Resultado inseguro:", result);


module.exports = app;
