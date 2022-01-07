import express from "express";

const app = express();

app.get("/get", (req, res) => {
  res.send("Rota GET");
});

app.post("/post", (req, res) => {
  res.send("Rota Post");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
