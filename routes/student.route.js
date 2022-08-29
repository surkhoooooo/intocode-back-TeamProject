const { Router } = require("express");
const router = Router();
const { student } = require("../controllers/studentController");
const authMiddleware = require("../middleware/auth.middleware");

/////Все CRUD операции + authMiddleware
