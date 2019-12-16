
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('roles').insert([
    { name: "admin" }, // id: 1
    { name: "user" }, // id: 2
  ]);

};
