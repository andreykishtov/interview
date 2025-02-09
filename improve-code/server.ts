import { Request, Response } from "express";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  let pay = {
    id: req.body.id,
  };
  res.json({ message: "GET request successful" });
});

app.post("/", (req: Request, res: Response) => {
  res.json({ message: "POST request successful" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
