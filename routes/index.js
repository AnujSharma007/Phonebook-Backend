var router = require("express").Router();

var phonebookroute = require("./Phonebook");

router.use("/phonebook", phonebookroute);

module.exports = router;