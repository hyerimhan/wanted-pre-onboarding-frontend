import { SIGNUP } from 'apis/auth'
import { IAuth, IAuthValid, IAuthValidError } from 'interfaces/auth'
import React, { useState, useEffect } from 'react'
import AuthContainerPresenter from './AuthContainer.presenter'

interface IAuthContainer {
  title: string
  dataTestid: string
}

const AuthContainer = ({ title, dataTestid }: IAuthContainer) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setDisabled(true)
      await SIGNUP({
        email: form.email,
        password: form.password,
      })
      alert('회원가입이 성공하였습니다!\n로그인을 시도해주세요.')
    } catch (error: any) {
      alert(error.response.data.message)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <AuthContainerPresenter
      title={title}
      data={form}
      errorMessage={errorMessage}
      disabled={disabled}
      dataTestid={dataTestid}
      onChange={handleChange}
      onSubmit={handleSubmit}
    ></AuthContainerPresenter>
  )
}

export default AuthContainer
