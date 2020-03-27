const dbConnection = require("../db");
const quiz = require("../models/quiz");
const quizModel = quiz.Model(dbConnection);
const quizJoiSchema = quiz.joiSchema;

const create = async quizObject => {
  const { error } = validate(quizObject);
  if (error) throw new APIError(400, error);
  return new quizModel(quizObject).save();
};

const getAll = () => {
  return quizModel.find(null, { __v: 0 });
};

const get = async id => {
  const quizFound = await quizModel.findById(id);
  if (!quizFound) throw new APIError(404, "QuizNotFound");
  return quizModel.findById(quizFound, { __v: 0 });
};

const update = async (id, quizObject) => {
  const { error } = validate(quizObject);
  if (error) throw new APIError(400, error);
  const updatedQuiz = await quizModel.findByIdAndUpdate(id, quizObject, {
    useFindAndModify: false,
    new: true,
    select: { __v: 0 }
  });
  if (!updatedQuiz) throw new APIError(404, "QuizNotFound");
  return updatedQuiz;
};

const validate = quizObject => {
  return quizJoiSchema.validate(quizObject);
};

module.exports = {
  create,
  getAll,
  get,
  update
};
