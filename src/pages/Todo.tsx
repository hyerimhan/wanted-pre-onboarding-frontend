import { CREATETODO, DELETETODO, GETTODO } from 'apis/todo'
import { FormStyle } from 'components/auth/AuthContainer.presenter'
import Button from 'components/common/Button'
import Input from 'components/common/Input'
import TodoItem from 'components/todo/TodoItem'
import { ITodo } from 'interfaces/todo'
import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import updateTodo from 'utils/updateTodo'

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [todoText, setTodoText] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      const response = await GETTODO()
      return setTodos(response.data)
    })()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!todoText) {
      alert('할 일을 입력해주세요!')
    }
    const response = await CREATETODO(todoText)
    setTodos([...todos, response])
    setTodoText('')
  }

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateTodo({ data: todos, setData: setTodos, e })

  const handleDelete = (todoId: number) => {
    setTodos(todos.filter((el) => el.id !== todoId))
    return DELETETODO(todoId)
  }

  return (
    <TodoStyle>
      <TodoUl>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            data={todo}
            onDelete={() => handleDelete(todo.id)}
            onComplete={handleComplete}
          />
        ))}
        {!todos.length && '오늘의 할 일을 추가해주세요!'}
      </TodoUl>
      <InputAreaStyle>
        <FormStyle onSubmit={handleSubmit}>
          <Input
            dataTestid='new-todo-input'
            placeholder='할 일을 입력하세요.'
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button
            buttontype='primaryType'
            type='submit'
            dataTestid='new-todo-add-button'
            text='추가'
          />
        </FormStyle>
      </InputAreaStyle>
    </TodoStyle>
  )
}

export default Todo

const TodoStyle = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  padding: 20px;

  ${FormStyle} {
    display: flex;
    flex-direction: row;

    input {
      padding: 0 20px;
      font-size: 18px;
    }

    button {
      border-radius: 5px;
      white-space: nowrap;
    }
  }
`

const TodoUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const InputAreaStyle = styled.div`
  display: flex;
  margin-top: 20px;
`
