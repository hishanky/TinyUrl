const express = require("express");
const controller = require("../controller/create");
const UidForUrl = require("../helpers/uid");
const router = express.Router();

router.post("/tinyurl", (req, res) => {
  let requrl = req.body.url;

  console.log(requrl);
  if (requrl.includes("http")) {
    controller
      .checkurlindb(requrl)
      .then((Response) => {
        console.log(Response[0]);
        if (Response[0].length == 1) {
          res.json({
            tinyurl: "http://127.0.0.1:2222/" + Response[0][0].tinyurl,
          });
        } else {
          let Uid = UidForUrl();

          controller
            .createTinyUrl(requrl, Uid)
            .then((Response) => {
              console.log(Response[0]);
              res.json({
                tinyurl: "http://127.0.0.1:2222/" + Uid,
              });
            })
            .catch((err) => {
              console.log(err);
              res.json({ Message: "Sorry Some Error Occured" });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.json({ Message: "Protocol is missing" });
  }
});

module.exports = router;
