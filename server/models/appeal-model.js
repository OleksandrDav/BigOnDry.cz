const {Schema, model} = require('mongoose');

const appealSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
});

module.exports = model("Appeal", appealSchema);
