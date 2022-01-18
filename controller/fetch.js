let db = require("../db/connection");
module.exports.geturl = async (id) =>
  db.query(`select * from urlsdb where tinyurl = '${id}'`);
