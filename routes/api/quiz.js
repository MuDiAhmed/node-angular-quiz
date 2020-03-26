const router = require("express").Router();
const quizRepo = require("../../repositories/quiz");

router.post("/", async (req, res) => {
  try {
    const quiz = await quizRepo.create(req.body);
    return res.status(201).json(quiz);
  } catch (error) {
    if (error instanceof APIError) {
      return res.status(error.status).send(error.message);
    }
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const quizzes = await quizRepo.getAll();
    return res.json(quizzes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const quiz = await quizRepo.get(id);
    return res.json(quiz);
  } catch (error) {
    if (error instanceof APIError) {
      return res.status(error.status).send(error.message);
    }
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const quiz = req.body;
    const id = req.params.id;
    const updatedQuiz = await quizRepo.update(id, quiz);
    return res.json(updatedQuiz);
  } catch (error) {
    if (error instanceof APIError) {
      return res.status(error.status).send(error.message);
    }
    return res.status(500).send(error.message);
  }
});

module.exports = router;
