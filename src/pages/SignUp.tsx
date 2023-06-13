import Button from 'components/Button'
import Input from 'components/Input'
import Title from 'components/Title'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <SignUpStyle>
      <Title
        titleType='h1'
        title='회원가입'
        margin='0 0 50px'
      />
      <FormStyle>
        <Input
          dataTestid='email-input'
          type='email'
          placeholder='이메일'
        />
        <Input
          dataTestid='password-input'
          type='password'
          placeholder='비밀번호'
        />
        <Button
          type='submit'
          dataTestid='signup-button'
          text='회원가입'
        />
      </FormStyle>
      <Button
        buttonType='transparent'
        text='홈으로'
        onClick={() => navigate('/')}
      />
    </SignUpStyle>
  )
}

export default SignUp

const SignUpStyle = styled.div`
  > button {
    width: 100%;
    background-color: skyblue;
    margin-top: 50px;
  }
`

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .inValid {
    color: red;
    font-size: 14px;
  }
`
