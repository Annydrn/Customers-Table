const express= require("express");
const router= express.Router();

const compradoresControllers = require("../controllers/compradoresControllers");

router.get("/", compradoresControllers.list);
router.post("/", compradoresControllers.save);
router.get("/delete/:id", compradoresControllers.delete);

router.get("update/:id", compradoresControllers.edit);
router.post("update/:id", compradoresControllers.update)
module.exports=router;