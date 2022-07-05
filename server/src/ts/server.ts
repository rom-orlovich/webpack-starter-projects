import express from "express";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.post("/login", (req, res) => {
  console.log(req.body.user);
  res.end();
});

app.listen(5000, () => {
  console.log("listen port 5000");
});
