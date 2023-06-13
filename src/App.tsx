import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul,li {
    list-style: none;
  }

  button, input {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  input {
    width: 100%;
    height: 100%;
  }
`

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default App
