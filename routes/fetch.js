const express = require("express");
const controller = require("../controller/fetch");
const router = express.Router();

router.get("/:id", (req, res) => {
  controller
    .geturl(req.params.id)
    .then((Response) => {
      console.log(Response[0]);
      if (Response[0].length == 1) {
        res.status(301).redirect(Response[0][0].url);
      } else {
        res.send("404");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
