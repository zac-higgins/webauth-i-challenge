exports.seed = function (knex) {
  return knex("users").insert([
    { username: "zac", password: "pass", role_id: 1 },
    { username: "john", password: "pass", role_id: 2 },
    { username: "ingrid", password: "pass", role_id: 2 },
  ]);
};