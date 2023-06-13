import AuthContainer from 'components/auth/AuthContainer'
import React from 'react'

const SignUp = () => {
  return (
    <AuthContainer
      title='회원가입'
      dataTestid='signup-button'
    />
  )
}

export default SignUp
