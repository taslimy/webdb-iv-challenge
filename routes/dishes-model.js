const db = require("../data/dbConfig");

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes").insert(dish);
}

function getDish(dish_id) {
  return db("dishes")
    .where({ dish_id })
    .first();
}

function getRecipes() {
  return db("recipes");
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}
