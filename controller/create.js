let db = require("../db/connection");
module.exports.checkurlindb = async (url) =>
  db.query(`select * from urlsdb where url = '${url}'`);

module.exports.checkUidInDb = async (Uid) =>
  db.query(`select * from urlsdb where tinyurl = '${Uid}'`);

module.exports.createTinyUrl = async (url, Uid) =>
  db.query(`INSERT INTO urlsdb (url, tinyurl) VALUES ('${url}', '${Uid}');`);
