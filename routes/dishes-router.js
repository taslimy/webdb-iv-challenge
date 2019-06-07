const express = require("express");

const Dishes = require("./dishes-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot find the dishes"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dishes = await Dishes.getDish(req.params.id);
    res.status(200).json(dishes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get the dishes id"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const dishes = await Dishes.addDish(req.body);
    res.status(200).json(dishes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot add a dish"
    });
  }
});

router.get('/', async (req,res) => {
  try {
    const dishes = await Dishes.getRecipes()
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get recipe."
    })
  }
})

module.exports = router;
