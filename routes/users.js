const { Router } = require("express");

const express = require("express");

const asyncHandler = require("express-async-handler");
const cors = require('cors')

const router = express.Router();
const { createUser, login, getByEmail } = require("../controllers/users");
const { authByToken } = require("../middleware/auth");

router.use(cors())
router.post("/register", createUser);
router.post("/login", login);
router.get("/me", authByToken, getByEmail);
module.exports = router;
