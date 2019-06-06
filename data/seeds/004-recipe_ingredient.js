exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredient")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredient").insert([
        { ingredient_name: "ingredient001", recipe_id: 1, ingredient_id: 1 },
        { ingredient_name: "ingredient001", recipe_id: 2, ingredient_id: 2 },
        { ingredient_name: "ingredient001", recipe_id: 3, ingredient_id: 3 },
        { ingredient_name: "ingredient001", recipe_id: 4, ingredient_id: 4 }
      ]);
    });
};
