import { SIGNIN, SIGNUP } from 'apis/auth'
import { IAuth, IAuthValid, IAuthValidError } from 'interfaces/auth'
import React, { useState, useEffect } from 'react'
import AuthContainerPresenter from './AuthContainer.presenter'
import { useLocation, useNavigate } from 'react-router-dom'

interface IAuthContainer {
  title: string
  dataTestid: string
}

const AuthContainer = ({ title, dataTestid }: IAuthContainer) => {
  const navigate = useNavigate()
  const router = useLocation().pathname
  const [form, setForm] = useState<IAuth>({
    email: '',
    password: '',
  })
  const [isValid, setIsValid] = useState<IAuthValid>({
    isEmail: false,
    isPassword: false,
  })
  const [errorMessage, setErrorMessage] = useState<IAuthValidError>({
    emailError: '',
    passwordError: '',
  })
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (isValid.isEmail && isValid.isPassword) {
      setDisabled(false)
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const current = event.target.value

    switch (event.target.type) {
      case 'email':
        const regex = /\S+@\S+\.\S+/

        if (!regex.test(current)) {
          setErrorMessage({
            ...errorMessage,
            emailError: '이메일 형식을 확인해 주세요.',
          })
          setIsValid({ ...isValid, isEmail: false })
          setDisabled(true)
        } else {
          setErrorMessage({ ...errorMessage, emailError: '' })
          setIsValid({ ...isValid, isEmail: true })
        }
        setForm({ ...form, email: current })
        break
      case 'password':
        if (current.length < 8) {
          setErrorMessage({
            ...errorMessage,
            passwordError: '8자 이상 입력해주세요.',
          })
          setIsValid({ ...isValid, isPassword: false })
          setDisabled(true)
        } else {
          setErrorMessage({
            ...errorMessage,
            passwordError: '',
          })
          setIsValid({ ...isValid, isPassword: true })
          setDisabled(false)
        }
        setForm({ ...form, password: current })
        break
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setDisabled(true)
      if (router === '/signup') {
        await SIGNUP({
          email: form.email,
          password: form.password,
        })
        alert('회원가입이 성공하였습니다!\n로그인을 시도해주세요.')
        navigate('/signin')
      }
      if (router === '/signin') {
        await SIGNIN({
          email: form.email,
          password: form.password,
        })
        alert('환영합니다!')
        navigate('/todo')
      }
    } catch (error: any) {
      alert(
        router === '/signup'
          ? error.response.data.message
          : router === '/signin'
          ? '이메일이나 비밀번호를 다시 확인해주세요.'
          : ''
      )
    } finally {
      setDisabled(false)
    }
  }

  return (
    <AuthContainerPresenter
      title={title}
      data={form}
      errorMessage={errorMessage}
      dataTestid={dataTestid}
      disabled={disabled}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}

export default AuthContainer
