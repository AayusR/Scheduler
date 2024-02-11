import jwt from "jsonwebtoken";
import Company from "../../models/company/company.js";

import bcrypt from "bcrypt";

async function signup(req, res) {
  try {
    const { fName, lName, email, password, company, department } = req.body;

    const existingStaff = await Company.findOne({
      email: email,
      role: "Employer",
    });

    if (!existingStaff) {
      const newStaff = new Company({ 
        fName: fName,
        lName: lName,
        email: email,
        department: department,
        company: company,
        password: await bcrypt.hash(password, 5),
        role: "Employer",
      });

      await newStaff.save();

      res.json({ message: "Employer signup successful" });
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

    const staff = await Company.findOne({ email: email });

    if (!staff) {
      return res.status(200).json({ error: "No staff found" });
    } else {
      const match = await bcrypt.compare(password, staff.password);
      if (match) {
        const token = jwt.sign(
          {
            email: staff.email,
            company: staff.company,
            department: staff.department,
            role: 'Company',
          },
          process.env.JWT_SECRET_C
        );
        res.json({ token, message: "Employer login successful" });
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
