import React from 'react'
import styled from 'styled-components'

interface IInput {
  inputType?: string
  type?: string
  item?: string
  value?: string
  errorMessage?: string
  placeholder?: string
  dataTestid?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  inputType = 'textType',
  type = 'text',
  item = '',
  value,
  errorMessage,
  placeholder,
  dataTestid,
  onChange,
}: IInput) => {
  return (
    <InputStyle inputType={inputType}>
      <input
        data-testid={dataTestid}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {item.length > 0 && errorMessage ? (
        <p className='inValid'>{errorMessage}</p>
      ) : null}
    </InputStyle>
  )
}

export default Input

const InputStyle = styled.div<{
  inputType: string
}>`
  input {
    border: 1px solid navy;
    border-radius: 5px;
    padding: 15px 30px;
    background-color: #fff;
  }

  ${({ inputType }) => handleInputType(inputType)}
`

const handleInputType = (inputType: string) => {
  switch (inputType) {
    case 'textType':
      return ``
  }
}
