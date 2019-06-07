exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Fresh Bananna" },
        { ingredient_name: "Fresh Apple" },
        { ingredient_name: "Fresh Strawberry" },
        { ingredient_name: "Fresh Cheese and sauce" }
      ]);
    });
};
