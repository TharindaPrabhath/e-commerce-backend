export enum HttpStatusCodes {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,

  /* Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response. */
  UNAUTHORIZED = 401,

  /* The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server. */
  FORBIDDEN = 403,
  NOT_FOUND = 404,

  /* The request could not be completed due to a conflict with the current state of the resource */
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export class HttpError extends Error {
  statusCode: number
  description: string | undefined
  isJoi: boolean | undefined
  constructor(
    // name: string,
    message: string,
    statusCode: number,
    description?: string,
    isJoi?: boolean
  ) {
    super()
    Object.setPrototypeOf(this, new.target.prototype)

    // this.name = name;
    this.message = message
    this.description = description
    this.statusCode = statusCode
    this.isJoi = isJoi
    Error.captureStackTrace(this)
  }
}
