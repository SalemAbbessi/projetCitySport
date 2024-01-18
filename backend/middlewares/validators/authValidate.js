const { body, validationResult } = require('express-validator')
exports.registerValidation = [
    body('nom').notEmpty().withMessage('Nom is required'),
    body('prenom').notEmpty().withMessage('Prenom is required'),
    body('email').notEmpty().isEmail().withMessage('Email must be valid email and required'),
    body('password').notEmpty().withMessage('Password is required')
];