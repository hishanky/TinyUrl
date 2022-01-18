const { checkUidInDb } = require("../controller/create");

function UidForUrl() {
  var randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var Unique = false;
  var result = "";
  do {
    for (var i = 0; i < 7; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    checkUidInDb(result)
      .then((Response) => {
        console.log(Response[0]);
        if (Response.length == 0) {
          Unique = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } while (Unique);

  return result;
}
module.exports = UidForUrl;
