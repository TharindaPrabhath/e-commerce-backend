import express from "express"
import { handleUploadImages } from "../controllers/image.controller"

const router = express.Router()

router.post("/upload", handleUploadImages)

router.get("/", express.static(__dirname + "/images"))

module.exports = router
