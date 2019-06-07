const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  addRecipe
};

function getRecipes() {
  return db("recipes")
    .join("dishes", "recipes.dishes_id", "dishes.dish_id")
    .select("recipes.recipe_id", "recipes.recipe_name", "dishes.name");
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}
