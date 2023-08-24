const express = require("express");

const authRouter = express.Router();
const {
  postSignUp,
  postLogin,
  postUpdate,
  postForget,
} = require("../controller/authController");

authRouter.post("/signup", postSignUp);
authRouter.post("/login", postLogin);
authRouter.post("/update", postUpdate);
authRouter.post("/forget", postForget);

module.exports = {
  authRouter,
};
