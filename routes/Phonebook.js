var router = require("express").Router();

var phonebookctrl = require("../controller/Phonebook");

router.get("/",phonebookctrl.readData);
router.post("/",phonebookctrl.addData);
router.put("/:id",phonebookctrl.updateData);
router.delete("/:id",phonebookctrl.deleteData);


module.exports = router;