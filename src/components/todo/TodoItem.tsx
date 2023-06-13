import Button from 'components/common/Button'
import React from 'react'
import { styled } from 'styled-components'

const TodoItem = () => {
  return (
    <TodoItemStyle>
      <label htmlFor=''>
        <input type='checkbox' />
        <span>할 일</span>
      </label>
      <ButtonsStyle>
        <Button
          text='수정'
          bgcolor='#909090'
        />
        <Button
          text='삭제'
          bgcolor='red'
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
