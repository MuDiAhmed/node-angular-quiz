const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { models } = require("../env").getEnv();
const MongooseSchema = mongoose.Schema;
const collectionName = models.QUIZ;

const schema = new MongooseSchema({
  published: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  },
  quiz: {
    type: [
      new MongooseSchema({
        question: { type: String, required: true },
        answers: { type: [String], required: true },
        correct: { type: Number, required: true },
        explanation: { type: String, required: true }
      })
    ],
    required: true
  },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

const joiSchema = Joi.object({
  published: Joi.boolean().default(false),
  title: Joi.string().required(),
  _id: Joi.string(),
  createAt: Joi.date(),
  updateAt: Joi.date(),
  quiz: Joi.array()
    .items(
      Joi.object({
        question: Joi.string().required(),
        _id: Joi.string(),
        answers: Joi.array()
          .length(3)
          .items(Joi.string().required())
          .required(),
        correct: Joi.number()
          .min(0)
          .max(2)
          .required(),
        explanation: Joi.string().required()
      }).required()
    )
    .required()
});

module.exports.joiSchema = joiSchema;
module.exports.schema = schema;
module.exports.Model = dbConnection =>
  dbConnection.model(collectionName, schema);
