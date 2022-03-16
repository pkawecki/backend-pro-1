import express from "express";

import productRoutes from "./routes/products.routes";
import usersRoutes from "./routes/users.routes";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);

app.use("/", (req, res) => {
  res.status(404).render("notFound");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
