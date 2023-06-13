import AuthContainer from 'components/auth/AuthContainer'
import React from 'react'

const SignIn = () => {
  return (
    <AuthContainer
      title='로그인'
      dataTestid='signin-button'
    />
  )
}

export default SignIn
