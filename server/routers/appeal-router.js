const Router = require('express').Router;
const { body } = require('express-validator');
const AppealController = require('../controllers/appeal-controller');

const router = new Router()

router.post('/create', 
   body('name').isLength({ min: 2, max: 62 }).withMessage('Name must be between 2 and 62 characters'),
   body('email').isEmail().withMessage('Invalid email format').notEmpty().withMessage('Email cannot be empty'),
   body('company').isLength({ min: 2, max: 100 }).withMessage('Company must be between 2 and 100 characters'),
   body('message').isLength({ min: 5, max: 5000 }).withMessage('Message must be between 5 and 5000 characters'),
   AppealController.createAppeal
)

module.exports = router;