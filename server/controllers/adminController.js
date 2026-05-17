import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import Admin from "../models/adminModel.js"

export const loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body

    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      })

    }

    const admin = await Admin.findOne({ email })

    if (!admin) {

      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      })

    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    )

    if (!isMatch) {

      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      })

    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    )

    res.status(200).json({
      success: true,
      token,
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    })

  }

}