exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "How to make Bananna Pie", dishes_id: 1 },
        { recipe_name: "How to make Apple Pie", dishes_id: 2 },
        { recipe_name: "How to make Strawberry Pie", dishes_id: 3 },
        { recipe_name: "How to make Pizza Pie", dishes_id: 4 }
      ]);
    });
};
