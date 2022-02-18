const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((rq, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("all will send to you");
  })
  .post((req, res, next) => {
    res.end("dish added" + req.body.name + "with details");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("dish udation not able to do");
  })
  .delete((req, res, next) => {
    res.end("delete all dishes");
  });
dishRouter
  .route("/:dishId")
  .get((req, res, next) => {
    res.end("specific details of dish" + req.params.dishId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("dish udation not able to do" + req.params.dishId);
  })
  .put((req, res, next) => {
    res.write("dish updating on" + req.params.dishId);
    req.end("will update the dish" + req.body.name);
  })
  .delete((req, res, next) => {
    res.end("deleting dish" + req.params.dishId);
  });
module.exports = dishRouter;
