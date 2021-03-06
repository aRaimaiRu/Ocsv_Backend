const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema(
  {
    // courseID: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    // },
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 255,
    },
  },
  { _id: false }
);

const Main = mongoose.model("MainTopic", mainSchema);
const mainValidateSchema = Joi.object({
  // courseID: Joi.objectId().required(),
  id: Joi.number().required(),
  title: Joi.string().min(5).max(255).required(),
});
function validateMain(main) {
  return mainValidateSchema.validate(main);
}

exports.Main = Main;
exports.validate = mainValidateSchema.validate;
exports.mainValidateSchema = mainValidateSchema;
exports.mainSchema = mainSchema;
