exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { name: "Bananna Pie" },
        { name: "Apple Pie" },
        { name: "Strawberry Pie" },
        { name: "Pizza Pie" }
      ]);
    });
};
