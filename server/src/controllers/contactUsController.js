import Contact from "../models/contactUsModel.js";

export const SubmitContactForm = async (req, res, next) => {
  try {
    const { name, email, feedback } = req.body;


    if (!name || !email || !feedback) {
      const error = new Error("All fields are required.");
      error.statusCode = 400;
      return next(error);
    }

   

    const newfeedback = await Contact.create({ name, email, feedback });

    console.log("New feedback form submission:", newfeedback);
    
    res.status(200).json({
      message: "Thank you for your feedback!",
      data: newfeedback,
    });
  } catch (error) {
    next(error);
  }
};