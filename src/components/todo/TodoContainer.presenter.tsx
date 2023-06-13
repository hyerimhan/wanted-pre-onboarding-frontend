import { FormStyle } from 'components/auth/AuthContainer.presenter'
import Button from 'components/common/Button'
import Input from 'components/common/Input'
import React from 'react'
import { styled } from 'styled-components'
import TodoItem from './TodoItem'

const TodoContainerPresenter = () => {
  return (
    <TodoStyle>
      <TodoUlStyle>
        <TodoItem />
      </TodoUlStyle>
      <InputAreaStyle>
        <FormStyle>
          <Input placeholder='할 일을 입력하세요.' />
          <Button
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
