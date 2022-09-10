import express from "express"
import { handleDeleteImage, handleUploadImages } from "../controllers/image.controller"

const router = express.Router()

router.post("/upload", handleUploadImages)
router.get("/", express.static(__dirname + "/images"))
router.delete("/:id", handleDeleteImage)

module.exports = router
