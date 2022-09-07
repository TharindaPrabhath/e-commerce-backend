import { NextFunction, Request, Response } from "express"
import log from "../config/logger"
import { HttpError } from "../types/Http"

export const logError = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  log.error(err)
  next(err)
}

export const handleError = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const error = {
    name: err.isJoi ? "VALIDATION_FAIL" : err.name,
    message: err.message,
    description: err.description,
  }
  return res.status(getStatusCode(err)).json(error)
}

const getStatusCode = (err: HttpError): number => {
  if (err.isJoi) return 400
  if (!err.statusCode) return 500
  return err.statusCode
}
