const express = require('express');
const cors = require('cors');
const { db } = require('../database/db');
const userRouter = require('../routes/users.router');
const repairsRouter = require('../routes/repairs.router');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      users: '/api/v1/users',
      repairs: '/api/v1/repairs',
    };
    this.database();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  routes() {
    this.app.use(this.paths.users, userRouter);
    this.app.use(this.paths.repairs, repairsRouter);
  }

  database() {
    db.authenticate()
      .then(() => {
        console.log('dDB aaunthenticated');
      })
      .catch(err => {
        console.log(err);
      });

    db.sync()
      .then(() => {
        console.log('db synced');
      })
      .catch(err => {
        console.log(err);
      });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`app started at port ${this.port}`);
    });
  }
}

module.exports = Server;
