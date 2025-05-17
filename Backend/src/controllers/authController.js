import jwt from "jsonwebtoken";
import { User } from "../../Db.js";
import bcrypt from 'bcrypt'

const JWTSecret = "nikhilthakur3536123@";


export const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); 
    await User.create({ firstname, lastname, email, password: hashedPassword });

    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "Incorrect email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ message: "Incorrect email or password" });
    }

    const token = jwt.sign({ id: user._id.toString() }, JWTSecret, { expiresIn: "1h" });
    res.json({ token, user: { email: user.email, username: user.username } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
