const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");


const contentSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  sub: {
    type: mongoose.Schema.Types.ObjectId,
  },
  contentType: {
    type: String,
    maxlength: 32,
  },
  Explain: {
    type: String,
    minlength: 1,
    maxlength: 2048,
  },
  outLink: {
    type: String,
    minlength: 1,
    maxlength: 2048,
  },
  Answer: [Number],
  Choice: [String],
  Picture: [String],
});

const Content = mongoose.model("Content", contentSchema);

function validateContent(content) {

  const schema = Joi.object({
    content: Joi.string(),
    sub: Joi.objectId(),
    contentType: Joi.string().max(32),
    Explain: Joi.string().max(2048),
    outLink: Joi.string().max(2048),
    Answer: Joi.array().items(Joi.number()),
    Choice: Joi.array().items(Joi.string()),
    Picture: Joi.array().items(Joi.string()),
  });

  return schema.validate(content);
}

exports.Main = Content;
exports.validate = validateContent;
