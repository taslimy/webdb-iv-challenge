exports.up = function(knex, Promise) {
  //  rishes Table
  return (
    knex.schema
      .createTable("dishes", tbl => {
        tbl.increments("dish_id");

        tbl
          .string("name", 129)
          .notNullable()
          .unique();
      })

      // recipes Table
      .createTable("recipes", tbl => {
        tbl
          .increments("recipe_id")
          .string("recipe_name", 150)
          .integer("dishes_id")
          .unsigned()
          .notNullable()
          .references("dish_id")
          .inTable("dishes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })

      // Ingredients Table
      .createTable("ingredients", tbl => {
        tbl.increments("ingredient_id").string("ingredient_name", 150);
      })

      // recipe_ingredient Table
      .createTable("recipe_ingredient", tbl => {
        tbl
          .increments()
          .string("ingredient_name", 150)
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipe_id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("dishes")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredient");
};
