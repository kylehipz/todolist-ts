import { HTTP_STATUS } from '../constants'

export class HTTPError extends Error {
  private readonly statusCode: number

  constructor (name: string, message: string, statusCode: number) {
    super()

    this.name = name
    this.message = message
    this.statusCode = statusCode

    Error.captureStackTrace(this)
  }

  getStatus () {
    return this.statusCode
  }

  serialize () {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack
    }
  }
}

export class ValidationError extends HTTPError {
  constructor (message: string) {
    super('ValidationError', message, HTTP_STATUS.CLIENT_ERROR)
  }
}

export class UnauthorizedError extends HTTPError {
  constructor (message: string) {
    super('UnauthorizedError', message, HTTP_STATUS.UNAUTHORIZED)
  }
}

export class ForbiddenError extends HTTPError {
  constructor (message: string) {
    super('ForbiddenError', message, HTTP_STATUS.FORBIDDEN)
  }
}

export class InternalServerError extends HTTPError {
  constructor (message: string) {
    super('InternalServerError', message, HTTP_STATUS.INTERNAL_SERVER_ERROR)
  }
}

export class NotFoundError extends HTTPError {
  constructor (message: string) {
    super('NotFoundError', message, HTTP_STATUS.NOT_FOUND)
  }
}
