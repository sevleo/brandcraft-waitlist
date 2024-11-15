require("dotenv").config();
const express = require("express");
const {
  handleEmailData,
  countEmails,
} = require("../controllers/emailDataController");
const router = express.Router();

// Feedback form
router.post("/add-email", handleEmailData);
router.get("/emails-count", countEmails);

module.exports = router;
