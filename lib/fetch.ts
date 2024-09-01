// DONE REVIEWING: GITHUB COMMIT
/* eslint no-console: "off" */
/* eslint no-undef: "off" */

type FetchOptionsBase = {
  method?: "GET" | "POST" | "PUT" | "DELETE"
  headers?: HeadersInit
  timeout?: number
}

type FetchOptionsWithBody<T> = FetchOptionsBase & {
  method: "POST" | "PUT"
  body: T
}

type FetchOptionsWithoutBody = FetchOptionsBase & {
  method?: "GET" | "DELETE"
  body?: never
}

type FetchOptions<T> = FetchOptionsWithBody<T> | FetchOptionsWithoutBody

type SHCRequestInit = Omit<RequestInit, "body"> & {
  body?: BodyInit | null
  timeout?: number
}

class FetchError extends Error {
  public status: number

  public statusText: string

  constructor(status: number, statusText: string, message: string, cause?: Error) {
    super(message, {cause})
    this.name = "FetchError"
    this.status = status
    this.statusText = statusText
  }
}

const HEADERS_DEFAULT: Record<string, string> = {"Content-Type": "application/json"}
const URL_BASE: string | undefined = process.env.NEXT_PUBLIC_URL_BASE

type ERRORS_TYPES = 400 | 401 | 403 | 404 | 408 | 500 | "maximumRetries" | "network" | "unknown"
const ERRORS_DETAILS: Record<ERRORS_TYPES, {status: number; statusText: string; message: string}> =
  {
    400: {
      status: 400,
      statusText: "BAD_REQUEST",
      message: "The request could not be understood by our server."
    },
    401: {
      status: 401,
      statusText: "NOT_AUTHORIZED",
      message: "You are not authorized to access this resource."
    },
    403: {
      status: 403,
      statusText: "FORBIDDEN",
      message: "Access to this resource is forbidden."
    },
    404: {
      status: 404,
      statusText: "NOT_FOUND",
      message: "The requested resource could not be found."
    },
    408: {
      status: 408,
      statusText: "REQUEST_TIMEOUT",
      message: "The request timed out. Please try again."
    },
    500: {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
      message: "There was an error on our server. Please try again later."
    },
    maximumRetries: {
      status: 408,
      statusText: "MAXIMUM_RETRIES",
      message: "Maximum retries reached. Please try again."
    },
    network: {
      status: 0,
      statusText: "NETWORK",
      message: "A network error occurred. Please check your connection and try again."
    },
    unknown: {
      status: 0,
      statusText: "UNKNOWN_ERROR",
      message: "An unknown or unexpected error occurred. Please try again."
    }
  }

const errorHandler = function errorHandler(
  type: ERRORS_TYPES,
  statusText?: string,
  message?: string,
  cause?: Error
): never {
  const {
    status: errorStatus,
    statusText: statusTextDefault,
    message: messageDefault
  } = ERRORS_DETAILS[type] || ERRORS_DETAILS.unknown
  const errorStatusText = statusText || statusTextDefault
  const errorMessage = message || messageDefault
  const fetchError = new FetchError(errorStatus, errorStatusText, errorMessage, cause)
  console.error(`${type}:${errorMessage}`, fetchError)
  throw fetchError
}

const fetchWithTimeout = function fetchWithTimeout(
  url: string,
  options: SHCRequestInit
): Promise<Response> {
  const {timeout = 8000, ...optionsRest} = options

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const {statusText, message} = ERRORS_DETAILS[408]
      reject(new FetchError(408, statusText, message))
    }, timeout)

    fetch(url, optionsRest)
      .then((response) => {
        clearTimeout(timer)
        resolve(response)
      })
      .catch((error) => {
        clearTimeout(timer)
        const {statusText, message} =
          error instanceof TypeError ? ERRORS_DETAILS.network : ERRORS_DETAILS.unknown
        reject(new FetchError(0, statusText, message, error))
      })
  })
}

const fetchRetry = async function fetchRetry(
  url: string,
  options: SHCRequestInit,
  maximumRetries: number = 3
): Promise<Response> {
  try {
    const response = await fetchWithTimeout(url, options)
    if (!response.ok) errorHandler((response.status as ERRORS_TYPES) || "unknown")
    return response
  } catch (error) {
    if (error instanceof FetchError && error.status === 408 && maximumRetries > 1)
      return fetchRetry(url, options, maximumRetries - 1)

    if (error instanceof FetchError) {
      if (maximumRetries <= 1)
        return errorHandler("maximumRetries", error.statusText, error.message, error)
      return errorHandler(error.status as ERRORS_TYPES, error.statusText, error.message, error)
    }

    return errorHandler("unknown")
  }
}

export const shcFetch = async function shcFetch<TResponse, TRequestBody = undefined>(
  resource: string,
  options: FetchOptions<TRequestBody> = {},
  maximumRetries: number = 3
): Promise<TResponse> {
  const {headers, timeout, ...optionsRest} = options
  const headersMerged: HeadersInit = {...HEADERS_DEFAULT, ...headers}

  const requestOptions: SHCRequestInit = {
    ...optionsRest,
    headers: headersMerged,
    body: optionsRest.body ? JSON.stringify(optionsRest.body) : null,
    timeout
  }

  try {
    const response = await fetchRetry(`${URL_BASE}${resource}`, requestOptions, maximumRetries)
    const data: TResponse = await response.json()
    return data
  } catch (error) {
    const status = error instanceof FetchError ? (error.status as ERRORS_TYPES) : "unknown"
    const statusText = error instanceof FetchError ? error.statusText : undefined
    const message = error instanceof FetchError ? error.message : undefined
    return errorHandler(status, statusText, message, error as Error)
  }
}

export default shcFetch
