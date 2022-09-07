// if the server was started in dev mode, then the below code block will execute
// and load values from .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

export const env = {
  PORT: process.env.PORT || "5000",
  VERSION: process.env.VERSION || "v1",
  NODE_ENV: process.env.NODE_ENV || "development",

  MONGODB_URL: process.env.MONGODB_URL || "",

  CLOUDINARY_URL: process.env.CLOUDINARY_URL || "",
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "",
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || "",
}
