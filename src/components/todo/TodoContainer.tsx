import React, { useState, useEffect } from 'react'
import TodoContainerPresenter from './TodoContainer.presenter'
import { ITodo } from 'interfaces/todo'
import { CREATETODO, GETTODO } from 'apis/todo'

const TodoContainer = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [todoText, setTodoText] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      const response = await GETTODO()
      return setTodos(response.data)
    })()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!todoText) {
      alert('할 일을 입력해주세요!')
    }
    const response = await CREATETODO(todoText)
    setTodos([...todos, response])
    setTodoText('')
  }

  return (
    <TodoContainerPresenter
      todoList={todos}
      todoValue={todoText}
      onSubmit={handleSubmit}
      onChange={(e) => setTodoText(e.target.value)}
    />
  )
}

export default TodoContainer
