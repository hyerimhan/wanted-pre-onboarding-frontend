export interface ITodoText {
  todo: string
}

export interface ITodoUpdate extends ITodoText {
  id: number
  isCompleted: boolean
}

export interface ITodo extends ITodoUpdate {
  userId: number
}
