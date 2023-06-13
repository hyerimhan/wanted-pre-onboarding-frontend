import React from 'react'
import styled from 'styled-components'

interface IInput {
  type?: string
  item?: string
  value?: string
  errorMessage?: string
  placeholder?: string
  dataTestid?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  type = 'text',
  item = '',
  value,
  errorMessage,
  placeholder,
  dataTestid,
  onChange,
}: IInput) => {
  return (
    <>
      <InputStyle
        data-testid={dataTestid}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {item.length > 0 && errorMessage ? (
        <p className='inValid'>{errorMessage}</p>
      ) : null}
    </>
  )
}

export default Input

const InputStyle = styled.input`
  border: 1px solid navy;
  border-radius: 5px;
  padding: 15px 30px;
  background-color: #fff;
`
