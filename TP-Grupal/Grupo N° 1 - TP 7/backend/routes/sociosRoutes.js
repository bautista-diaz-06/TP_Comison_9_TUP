const express = requiere("express");
const socioController = requiere ("../controllers/socioController");

const router = express.Router();

router.get("/", socioController.getAll);
router.get("/:id", socioController.getById);
router.post("/", socioController.create);
router.put("/:id", socioController.update);
router.delete("/:id", socioController.remove);

module.exports = router;