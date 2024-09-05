import express from "express";
const app = express();
const port = 3000 || process.env;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "joke 1", content: "this is jokes" },
    { id: 1, title: "joke 2", content: "this is jokes 2" },
    { id: 1, title: "joke 3", content: "this is jokes 3" },
    { id: 1, title: "joke 4", content: "this is jokes 4" },
    { id: 1, title: "joke 5", content: "this is jokes 5" },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
