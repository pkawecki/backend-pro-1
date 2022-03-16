import { ProductMockRepository } from "./../repositories/products-mock-repository";
import { ProductsController } from "./../controllers/products.controller";
import express from "express";

const repository = new ProductMockRepository();
const controller = new ProductsController(repository);

const router = express.Router();

router.post("", (req, res) => {
  try {
    return res.json(controller.addItem(req.body));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getAll", (req, res) => {
  try {
    return res.json(controller.getAllItems());
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/getById/:id", (req, res) => {
  try {
    console.log("id: ", req.params.id);

    return res.json(controller.getItemById(req.params.id));
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/getByName/:name", (req, res) => {
  try {
    return res.json(controller.findProductByName(req.params.name));
  } catch (error) {
    res.status(500).json(error);
  }
});
router.delete("/delete/:id", (req, res) => {
  try {
    return res.json(controller.deleteItem(req.params.id));
  } catch (error) {
    res.status(500).json(error);
  }
});
router.patch("/updateItem/:id", (req, res) => {
  try {
    return res.json(controller.updateItem(req.params.id, req.body));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
