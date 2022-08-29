const { Router } = require("express");
const router = Router();
const { student } = require("../controllers/student.controller");
const authMiddleware = require("../middleware/auth.middleware");

/////Все CRUD операции + authMiddleware

module.exports = router;
