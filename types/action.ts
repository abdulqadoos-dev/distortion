export interface Action {
  type: ActionType,
  operation: UserOperations
  payload: any
}

export enum ActionType {
  USER
}

export enum UserOperations {
  SET_USER
}