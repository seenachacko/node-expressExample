const express = require("express");
const bodyParser = require("body-parser");

const promotionsRouter = express.Router();
promotionsRouter.use(bodyParser.json());

promotionsRouter
  .route("/")
  .all((rq, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("all promotions will send to you");
  })
  .post((req, res, next) => {
    res.end("promotion added" + req.body.name + "with details");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("promotions udation not able to do");
  })
  .delete((req, res, next) => {
    res.end("delete all promotions");
  });
  promotionsRouter
  .route("/:promotionsId")
  .get((req, res, next) => {
    res.end("details of a promotion" + req.params.promotionsId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "promotion details udation not able to do" + req.params.promotionsId
    );
  })
  .put((req, res, next) => {
    res.write("promotion details  updating on" + req.params.promotionsId);
    req.end("will update the dish" + req.body.name);
  })
  .delete((req, res, next) => {
    res.end("deleting promotion details" + req.params.promotionsId);
  });

module.exports = promotionsRouter;
