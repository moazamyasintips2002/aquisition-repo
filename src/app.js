import express from "express";
const app = express();

// Fixed: added ')' at the end of line 6 to close app.get
app.get("/", (req, res) => {
  res.status(200).send("Hello from aquisition API");
});

export default app;
