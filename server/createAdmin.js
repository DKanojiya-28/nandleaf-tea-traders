import dotenv from "dotenv"
import bcrypt from "bcryptjs"

import connectDB from "./config/db.js"
import Admin from "./models/adminModel.js"

dotenv.config()

connectDB()

const createAdmin = async () => {

  try {

    const hashedPassword = await bcrypt.hash(
      "admin123",
      10
    )

    await Admin.create({
      email: "admin@nandleaf.com",
      password: hashedPassword,
    })

    console.log("Admin Created")

    process.exit()

  } catch (error) {

    console.log(error)

    process.exit(1)

  }

}

createAdmin()