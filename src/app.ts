import express, { Request, Response } from "express"
import cors from "cors"
import multer from "multer"

// constants
import { env } from "./constants/env"

import log from "./config/logger"

import { handleError, logError } from "./utils/errorHandler"
import mongoose from "mongoose"

// if the server was started in dev mode, then the below code block will execute
// and load values from .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const API_VERSION = env.VERSION
const PORT = parseInt(env.PORT)

const app = express()
const productRoutes = require("./routes/product.routes")

if (env.NODE_ENV === "production") log.info("Running in production mode")
else log.info("Running in development mode")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    cb(null, "img")
  },
})

// NOTE: These cors options were applied to avoid throwing CORS Policy error in client side
app.use(cors())
app.use(multer({ storage: storage }).single("image"))
app.use(express.json({ limit: "500kb" }))
app.use(express.urlencoded({ extended: false }))

// status route
app.use(`/${API_VERSION}/status`, async (req: Request, res: Response) => {
  res.status(200).send(`Up & running... e-commerce backend API ${API_VERSION} on port ${PORT} in ${env.NODE_ENV} mode`)
})

// product routes
app.use(`/${API_VERSION}/products`, productRoutes)

// error handling
app.use(logError)
app.use(handleError)

mongoose
  .connect(env.MONGODB_URL)
  .then(() => {
    log.info("Connected to MongoDb")
    app.listen(PORT, () => {
      log.info(`Server started on port: ${PORT}`)
    })
  })
  .catch((e) => {
    log.error(e, "Couldn't connect to MongoDb")
  })
