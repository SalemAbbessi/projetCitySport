const express = require("express");
const router = express.Router();
const authControllers = require("../controller/auth.js")
const { registerValidation, loginValidation, validate } = require('..//middlewares/validators/authValidate.js');
const isAuth = require("../middlewares/isAuth.js");

router.post('/register', authControllers.register)
router.post('/login', authControllers.login)
router.post('/logout', authControllers.logout)
router.get('/current', isAuth, authControllers.current) // Retourne l'utilisateur authentifié en ce moment

module.exports = router