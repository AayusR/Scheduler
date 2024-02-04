import jwt from "jsonwebtoken";
import User from "../../models/applicant/user.js";
import bcrypt from "bcrypt";

async function signup(req, res) {
  try {
    const { fName, lName, email, password } = req.body;

    const existingUser = await User.findOne({ email: email, role: "Employee" });

    if (!existingUser) {
      const newUser = new User({
        fName: fName,
        lName: lName,
        email: email,
        password: await bcrypt.hash(password, 5),
        role: "Employee",
      });

      await newUser.save();

      res.json({ message: "Employee signup successful" });
    } else {
      res.json({ message: "Email already used" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, role: "Employee" });

    if (!user) {
      return res.status(200).json({ error: "No user found" });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign(
          { email: user.email, role: user.role, role: "Employee" },
          process.env.JWT_SECRET_E
        );

        res.json({ token, message: "Employee login successful" });
      } else {
        res.json({ message: "Wrong password" });
      }
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default {
  signup,
  login,
};
