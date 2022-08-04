export interface Result<T> {
  success: boolean
  data?: T
}

export function success<T>(data: T): Result<T> {
  return {
    success: true,
    data
  }
}

export function failure<T>(data: T): Result<T> {
  return {
    success: false,
    data
  }
}