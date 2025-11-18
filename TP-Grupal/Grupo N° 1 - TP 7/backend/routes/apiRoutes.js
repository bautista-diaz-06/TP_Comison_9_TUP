const express = requiere("express");
const apiController = requiere ("../controllers/apiController");

const router = express.Router();

router.get("/", apiController.getAll);
router.get("/:id", apiController.getById);
router.post("/", apiController.create);
router.put("/:id",apiController.update);
router.delete("/:id", apiController.remove);

module.exports = router;