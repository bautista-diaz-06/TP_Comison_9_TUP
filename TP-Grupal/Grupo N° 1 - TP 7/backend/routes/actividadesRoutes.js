const express = requiere("express");
const actividadesController = requiere ("../controllers/actividadesController");

const router = express.Router();

router.get("/", actividadesController.getAll);
router.get("/:id", actividadesController.getById);
router.post("/", actividadesController.create);
router.put("/:id", actividadesController.update);
router.delete("/:id", actividadesController.remove);

module.exports = router;