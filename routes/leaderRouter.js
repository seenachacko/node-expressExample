const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((rq, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("all leaders details will send to you");
  })
  .post((req, res, next) => {
    res.end("leader added" + req.body.name + "with details");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("leader details udation not able to do");
  })
  .delete((req, res, next) => {
    res.end("delete all leaders");
  });
leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    res.end("details of a leader" + req.params.leaderId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("leader details udation not able to do" + req.params.leaderId);
  })
  .put((req, res, next) => {
    res.write("leader details  updating on" + req.params.leaderId);
    req.end("will update the dish" + req.body.name);
  })
  .delete((req, res, next) => {
    res.end("deleting leader details" + req.params.leaderId);
  });

module.exports = leaderRouter;
