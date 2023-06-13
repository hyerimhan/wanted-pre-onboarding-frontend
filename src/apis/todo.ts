import { ITodoUpdate } from 'interfaces/todo'
import { axiosInstance } from './instance'

/** 투두 생성 */
export const CREATETODO = async (todo: string) => {
  const data = await axiosInstance.post('/todos', { todo })
  return data.data
}

/** 투두 가져오기 */
export const GETTODO = () => axiosInstance.get('/todos')

/** 투두 업데이트 */
export const UPDATETODO = async ({ id, todo, isCompleted }: ITodoUpdate) => {
  const response = await axiosInstance.put(`todos/${id}`, {
    todo,
    isCompleted,
  })
  return response.data
}

/** 투두 삭제 */
export const DELETETODO = async (id: number) => {
  const response = await axiosInstance.delete(`todos/${id}`)
  return response
}
