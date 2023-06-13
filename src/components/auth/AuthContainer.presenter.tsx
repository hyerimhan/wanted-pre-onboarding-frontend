import Button from 'components/common/Button'
import Input from 'components/common/Input'
import Title from 'components/common/Title'
import { IAuth, IAuthValidError } from 'interfaces/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface IAuthContainer {
  title: string
  data: IAuth
  errorMessage: IAuthValidError
  dataTestid: string
  disabled: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const AuthContainerPresenter = ({
  title,
  data,
  errorMessage,
  dataTestid,
  disabled,
  onChange,
  onSubmit,
}: IAuthContainer) => {
  const navigate = useNavigate()

  return (
    <AuthStyle>
      <Title
        titleType='h1'
        title={title}
        margin='0 0 50px'
      />
      <FormStyle onSubmit={onSubmit}>
        <Input
          dataTestid='email-input'
          type='email'
          placeholder='이메일'
          value={data.email}
          onChange={onChange}
        />
        <InvalidStyle>{errorMessage.emailError}</InvalidStyle>
        <Input
          dataTestid='password-input'
          type='password'
          placeholder='비밀번호'
          value={data.password}
          onChange={onChange}
        />
        <InvalidStyle className='inValid'>
          {errorMessage.passwordError}
        </InvalidStyle>
        <Button
          type='submit'
          dataTestid={dataTestid}
          text={title}
          isDisabled={disabled}
        />
      </FormStyle>
      <Button
        text='홈으로'
        onClick={() => navigate('/')}
      />
    </AuthStyle>
  )
}

export default AuthContainerPresenter

const AuthStyle = styled.div`
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
`

const InvalidStyle = styled.p`
  color: red;
  font-size: 14px;
`
