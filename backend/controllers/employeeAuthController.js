import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcrypt";

async function signup(req, res) {
  const { fName, lName, email, password } = req.body;

  const user = await User.findOne({ email: email, role:"Employee" });

  if (!user) {
  
    const newUser = new User({
      fName: fName,
      lName: lName,
      email: email,
      password: await bcrypt.hash(password, 5),
      role: "Employee",
    });

    newUser.save();

    res.json({ message: "Employee signup successful" });
  } else {
    res.json({ message: "Email already used" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, role: "Employee" });

  ;
  if (!user) {
    return res.status(200).json({ error: "No user found" });
  } else {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        { email: user.email, role: user.role },
        process.env.JWT_SECRET
      );
      res.json({ token, message: "Employee login successful" });
    } else res.json({ message: "Wrong password" });
  }
}

export default {
  signup,
  login,
};
