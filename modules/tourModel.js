const mongoose = require('mongoose');
const tour = new mongoose.Schema({
  country: { type: String, trim: true, required: true },
  city: String,
  address_1: String,
  reason_for_recall: String,
  address_2: String,
  product_quantity: { type: String },
  code_info: String,
  center_classification_date: Date,
  distribution_pattern: String,
  state: String,
  product_description: String,
  report_date: Date,
  classification: String,
  openfda: {},
  recalling_firm: String,
  recall_String: String,
  initial_firm_notification: String,
  product_type: String,
  event_id: String,
  more_code_info: String,
  recall_initiation_date: String,
  postal_code: String,
  voluntary_mandated: String,
  status: String,
});

const TourModel = mongoose.model('foods', tour);

module.exports = TourModel;
