import Button from 'components/common/Button'
import { ITodo } from 'interfaces/todo'
import React from 'react'
import { styled } from 'styled-components'

interface ITodoItem {
  data: ITodo
  onComplete?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete?: () => void
}

const TodoItem = ({ data, onComplete, onDelete }: ITodoItem) => {
  return (
    <TodoItemStyle>
      <label htmlFor={data.id.toString()}>
        <input
          type='checkbox'
          id={data.id.toString()}
          value={data.todo}
          checked={data.isCompleted}
          onChange={onComplete}
        />
        <span>{data.todo}</span>
      </label>
      <ButtonsStyle>
        <Button
          dataTestid='modify-button'
          text='수정'
          bgcolor='#909090'
        />
        <Button
          dataTestid='delete-button'
          text='삭제'
          bgcolor='red'
          onClick={onDelete}
        />
      </ButtonsStyle>
    </TodoItemStyle>
  )
}

export default TodoItem

const TodoItemStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    display: flex;
    width: 70%;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    input {
      &[type='checkbox'] {
        width: 20px;

        &:checked + span {
          text-decoration: line-through;
        }
      }
      &[type='text'] {
        border: 1px solid navy;
        padding: 10px 20px;
        background-color: #fff;
        border-radius: 5px;
      }
    }
  }
`

const ButtonsStyle = styled.div`
  display: flex;
  gap: 5px;

  button {
    padding: 5px 10px;
    border-radius: 5px;
  }
`
