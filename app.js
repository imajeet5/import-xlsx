const app = require("express")();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Node Server is running",
  });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
