const express = requiere("express");
const reservaController = requiere ("../controllers/reservaController");

const router = express.Router();

router.get("/", reservaController.getAll);
router.get("/:id", reservaController.getById);
router.post("/", reservaController.create);
router.put("/:id", reservaController.update);
router.delete("/:id", reservaController.remove);

module.exports = router;