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
  quiz: [
    {
      question: { type: String, required: true },
      answers: { type: [String], required: true },
      correct: { type: Number, required: true }
    }
  ]
});

const joiSchema = Joi.object({
  published: Joi.boolean().default(false),
  quiz: Joi.array().items(
    Joi.object({
      question: Joi.string().required(),
      answers: Joi.array().items(Joi.string()),
      correct: Joi.number().required()
    })
  )
});

module.exports.joiSchema = joiSchema;
module.exports.schema = schema;
module.exports.Model = dbConnection =>
  dbConnection.model(collectionName, schema);
