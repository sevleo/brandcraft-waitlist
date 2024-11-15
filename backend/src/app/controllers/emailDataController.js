const EmailData = require("../models/emailData");
const { isValidEmail } = require("../helpers/validation");

const handleEmailData = async (req, res, next) => {
  const email = req.body.email;

  if (email && isValidEmail(email)) {
    console.log(email);
    const existingEmail = await EmailData.findOne({ email: email });
    console.log(existingEmail);

    if (existingEmail) {
      res.status(409).send({
        message: "Email already exists",
      });
      return;
    }

    const newEmailData = new EmailData({
      email: email,
      creationDate: new Date(),
    });

    await newEmailData.save();

    const emailCount = await EmailData.countDocuments();

    res.status(200).send({
      success: true,
      message: "Received email",
      emailCount: emailCount,
    });

    // setTimeout(() => {
    //   res.status(200).send({
    //     success: true,
    //     message: "Received email",
    //     emailCount: emailCount,
    //   });
    // }, 2000);
  } else {
    res.status(500).send({ message: "Please provide a proper email" });
  }
};

const countEmails = async (req, res, next) => {
  const emailCount = await EmailData.countDocuments();

  res.status(200).send({
    success: true,
    emailCount: emailCount,
  });
};

module.exports = {
  handleEmailData,
  countEmails,
};
