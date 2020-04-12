const express = require("express");

const server = express();

const PORT = process.env.PORT || 8000;

server.get("/api", (req, res) => {
  res.send({ data: "data" });
});

server.listen(PORT, () => console.log(`Server listening to PORT : ${PORT}`));
