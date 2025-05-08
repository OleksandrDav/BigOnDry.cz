const appealModel = require("../models/appeal-model");
const ApiError = require('../errors/api-errors.js');
const mailService = require("./mail-service.js");

class AppealService {
  async createAppeal(name, email, company, topic, phone, message) {
    const appeal = await appealModel.create({
      name,
      email,
      company,
      topic,
      phone,
      message,
    });
    if (!appeal) {
      throw ApiError.BadRequest("Error creating order");
    }
    await mailService.createAppealEmail(appeal.email, appeal.name, appeal.company, appeal.topic, appeal.phone, appeal.message);
    return appeal;
  }
}

module.exports = new AppealService();