import jwt from "jsonwebtoken";

const genToken = (userID, res) => {
  const token = jwt.sign({ ID: userID }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("IDCard", token, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
};

export default genToken;