const { validationResult } = require('express-validator');
const ApiError = require('../errors/api-errors.js');
const AppealService = require('../services/appeal-service');

class AppealController {
  async createOrder(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }
      const {
        destination,
        customerEmail,
        temperatureMax,
        temperatureMin,
        tiltAngleMax,
      } = req.body;
      const orderData = await orderService.createOrder(
        destination,
        customerEmail,
        temperatureMax,
        temperatureMin,
        tiltAngleMax
      );
      return res.json(orderData);
    } catch (error) {
      next(error);
    }
  }

  async createAppeal(req, res, next) {
   try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }
      const {
         name,
         email,
         company,
         topic,
         phone,
         message
       } = req.body;
       const appealData = await AppealService.createAppeal(
         name,
         email,
         company,
         topic,
         phone,
         message
       );
       return res.json(appealData);
   } catch (error) {
      next(error);
   }
  }
}


module.exports = new AppealController();