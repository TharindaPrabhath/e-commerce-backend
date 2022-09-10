import { NextFunction, Request, Response } from "express"
import { deleteImage, uploadImages } from "../services/image.service"
import { HttpError, HttpStatusCodes } from "../types/Http"

export const handleUploadImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.files || req.files?.length === 0) throw new HttpError("No files were found", HttpStatusCodes.BAD_REQUEST)
    const result = await uploadImages(req.files as any[])
    res.status(HttpStatusCodes.OK).json(result)
  } catch (err) {
    next(err)
  }
}

export const handleDeleteImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.params?.id) throw new HttpError("No image id was found in the request", HttpStatusCodes.BAD_REQUEST)
    await deleteImage(req.params.id)
    res.status(HttpStatusCodes.OK).send()
  } catch (err) {
    next(err)
  }
}
