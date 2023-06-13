import Button from 'components/Button'
import Input from 'components/Input'
import Title from 'components/Title'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FormStyle } from './SignUp'

const SignIn = () => {
  const navigate = useNavigate()

  return (
    <SignInStyle>
      <Title
        titleType='h1'
        title='로그인'
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
          dataTestid='signin-button'
          text='로그인'
        />
      </FormStyle>
      <Button
        buttonType='transparent'
        text='홈으로'
        onClick={() => navigate('/')}
      />
    </SignInStyle>
  )
}

export default SignIn

const SignInStyle = styled.div`
  > button {
    width: 100%;
    background-color: skyblue;
    margin-top: 50px;
  }
`
