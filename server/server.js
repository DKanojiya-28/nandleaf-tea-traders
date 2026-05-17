import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import contactRoutes from "./routes/contactRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config()

connectDB()

const app = express()

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://nandleaf-tea-traderss.vercel.app"
  ],
  credentials: true,
}))
app.use(express.json())

// Routes
app.use("/api/contact", contactRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/products", productRoutes)

// Test Route
app.get("/", (req, res) => {
  res.send("Nandleaf Tea Traders Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})