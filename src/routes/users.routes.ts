import express from "express";
import { UserController } from "./../controllers/user.controller";
import { UserMockRepository } from "./../repositories/user-mock-repository";

const repository = new UserMockRepository();
const controller = new UserController(repository);

const router = express.Router();

router.post("", (req, res) => {
  try {
    return res.json(controller.addItem(req.body));
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
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
    console.log(req.params.id);

    return res.json(controller.getItemById(req.params.id));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/getByName/:name", (req, res) => {
  try {
    return res.json(controller.findUserByName(req.params.name));
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
