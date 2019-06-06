const express = require("express");

const Recipes = require("./dishes-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get recipes."
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const recipes = await Recipes.addRecipe(req.body);
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot add recipes sorry"
    });
  }
});

module.exports = router;
