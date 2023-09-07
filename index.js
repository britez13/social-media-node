const express = require("express")

const authRoutes = require("./routes/auth")

const app = express()
const PORT = 3000 

/* Routes */
app.use("/auth", authRoutes)

app.listen( PORT, () => {
  console.log("Listening on port ", PORT)
}) 