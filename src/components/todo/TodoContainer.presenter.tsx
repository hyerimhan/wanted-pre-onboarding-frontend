import { FormStyle } from 'components/auth/AuthContainer.presenter'
import Button from 'components/common/Button'
import Input from 'components/common/Input'
import React from 'react'
import { styled } from 'styled-components'
import TodoItem from './TodoItem'
import { ITodo } from 'interfaces/todo'

interface ITodoContainer {
  todoList: ITodo[]
  todoValue: string
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onComplete?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoContainerPresenter = ({
  todoList,
  todoValue,
  onSubmit,
  onChange,
  onComplete,
}: ITodoContainer) => {
  return (
    <TodoStyle>
      <TodoUlStyle>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            data={todo}
            onComplete={onComplete}
          />
        ))}
      </TodoUlStyle>
      <InputAreaStyle>
        <FormStyle onSubmit={onSubmit}>
          <Input
            dataTestid='new-todo-input'
            placeholder='할 일을 입력하세요.'
            value={todoValue}
            onChange={onChange}
          />
          <Button
            dataTestid='new-todo-add-button'
            buttontype='primaryType'
            type='submit'
            text='추가'
          />
        </FormStyle>
      </InputAreaStyle>
    </TodoStyle>
  )
}

export default TodoContainerPresenter

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

const TodoUlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const InputAreaStyle = styled.div`
  display: flex;
  margin-top: 20px;
`
