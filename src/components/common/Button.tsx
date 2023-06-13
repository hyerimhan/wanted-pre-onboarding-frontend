import React from 'react'
import styled from 'styled-components'

interface IButton {
  buttontype?: string
  type?: 'button' | 'submit'
  text: string
  dataTestid?: string
  bgcolor?: string
  color?: string
  isDisabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  buttontype = 'primaryType',
  type = 'button',
  text,
  dataTestid,
  bgcolor = '',
  color = '',
  isDisabled = false,
  onClick,
}: IButton) => {
  return (
    <ButtonStyle
      buttontype={buttontype}
      type={type}
      data-testid={dataTestid}
      bgcolor={bgcolor}
      color={color}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button<{
  buttontype: string
  bgcolor: string
  disabled: boolean
}>`
  height: 50px;
  padding: 0 50px;
  ${({ buttontype }) => handleButtonType(buttontype)}
  background-color: ${({ bgcolor, disabled }) =>
    bgcolor || (disabled && '#909090')};
  color: ${({ color }) => color};
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`

const handleButtonType = (buttontype: string) => {
  switch (buttontype) {
    case 'primaryType':
      return `
        background-color: navy;
        color: #fff;
      `
    case `transparent`:
      return `
        background-color: transparent;
        color: #000
      `
  }
}
