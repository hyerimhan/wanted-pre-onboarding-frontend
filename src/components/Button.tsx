import React from 'react'
import styled from 'styled-components'

interface IButton {
  buttonType?: string
  type?: 'button' | 'submit'
  text: string
  dataTestid?: string
  bgColor?: string
  color?: string
  isDisabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  buttonType = 'primaryType',
  type = 'button',
  text,
  dataTestid,
  bgColor = '',
  color = '',
  isDisabled = false,
  onClick,
}: IButton) => {
  return (
    <ButtonStyle
      buttonType={buttonType}
      type={type}
      data-testid={dataTestid}
      bgColor={bgColor}
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
  buttonType: string
  bgColor: string
  disabled: boolean
}>`
  height: 50px;
  padding: 0 50px;
  ${({ buttonType }) => handleButtonType(buttonType)}
  background-color: ${({ bgColor, disabled }) =>
    bgColor || (disabled && '#909090')};
  color: ${({ color }) => color};
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'cursor')};
`

const handleButtonType = (buttonType: string) => {
  switch (buttonType) {
    case 'primaryType':
      return `
        background-color: navy;
        color: #fff;
      `
    case `transparent`:
      return `
        background-color: transparent;
        color: #000;
      `
  }
}
