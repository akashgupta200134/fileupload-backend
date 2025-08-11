const express = require("express");
const router = express.Router();

const {fileUpload } = require("../controller/fileUpload");


router.post("/localfile",fileUpload);

module.exports = router;





