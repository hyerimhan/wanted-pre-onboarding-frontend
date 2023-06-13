import { UPDATETODO } from 'apis/todo'
import { ITodo, ITodoUpdate } from 'interfaces/todo'
import React from 'react'

interface IUpdateTodo {
  data: ITodo[]
  setData: React.Dispatch<React.SetStateAction<ITodo[]>>
  e?: React.ChangeEvent<HTMLInputElement>
  editSubmit?: ITodoUpdate
}

const updateTodo = async ({ data, setData, e, editSubmit }: IUpdateTodo) => {
  let response: ITodo
  if (e) {
    const target = e.target
    response = await UPDATETODO({
      id: Number(target.id),
      todo: target.value,
      isCompleted: target.checked,
    })
  } else if (editSubmit) {
    response = await UPDATETODO(editSubmit)
  }

  const update = data.map((todo) => {
    if (todo.id === response.id) {
      return response
    }
    return todo
  })
  setData(update)
}

export default updateTodo
