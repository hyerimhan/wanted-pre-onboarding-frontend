import Button from 'components/common/Button'
import Title from 'components/common/Title'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  const navigate = useNavigate()

  return (
    <HomeStyle>
      <Title
        titleType='h1'
        title='안녕하세요!'
        margin='0 0 10px'
      />
      <Title
        titleType='h2'
        title='지원자 한혜림입니다.'
        margin='0 0 50px'
      />
      <Button
        text='로그인 페이지'
        onClick={() => navigate('/signin')}
      />
      <Button
        text='회원가입 페이지'
        onClick={() => navigate('/signup')}
      />
    </HomeStyle>
  )
}

export default Home

const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`
