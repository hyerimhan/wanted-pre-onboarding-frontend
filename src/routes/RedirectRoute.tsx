import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getLocalStorage } from 'utils/storage'

const RedirectRoute = () => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  const accessToken = getLocalStorage('accessToken')
  useEffect(() => {
    if (accessToken && (location === '/signup' || location === '/signin')) {
      alert('로그인 상태입니다!')
      navigate('/todo')
    }
    if (!accessToken && location === '/todo') {
      alert('로그인이 필요해요!')
      navigate('/signin')
    }
  }, [navigate, location, accessToken])
  return null
}

export default RedirectRoute
