const Joi = require("joi");
const UserModel = require("../models/Users");

const registration = async (req, res) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).required(),
    age: Joi.number().required(),
    gender: Joi.string().required(),
    parentFullName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({
      responseCode: "80",
      responseMessage: error.details[0].message,
      data: null,
    });
  }
  const { fullName, age, gender, parentFullName, email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).send({
        responseCode: "80",
        responseMessage: "email already exists",
        data: null,
      });
    }
    user = new UserModel({
      fullName,
      age,
      gender,
      parentFullName,
      email,
      password,
      createdDate: new Date().toJSON()
    });
    await user.save()
  } catch (error) {
    res.status(500).send({
      responseCode: "90",
      responseMessage: "Internal server error",error,
      data: null,
    });
  }
};
module.exports = registration;
