const { Router } = require("express");
const router = Router();
const { admin } = require("../controllers/adminController");
const adminMiddleware = require("../middleware/admin.middleware");

/////Все CRUD операции
