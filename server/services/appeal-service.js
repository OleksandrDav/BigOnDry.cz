const appealModel = require("../models/appeal-model");
const ApiError = require('../errors/api-errors.js');
const mailService = require("./mail-service.js");

class AppealService {
  async createAppeal(name, email, company, phone, message) {
    const appeal = await appealModel.create({
      name,
      email,
      company,
      phone,
      message,
    });
    if (!appeal) {
      throw ApiError.BadRequest("Error creating order");
    }
    await mailService.createAppealEmail(appeal.email, appeal.name, appeal.company, appeal.phone, appeal.message);
    return appeal;
  }
}

module.exports = new AppealService();