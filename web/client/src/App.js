import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [apiMsg, setApiMsg] = useState(null)
  useEffect(() => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => {
        setApiMsg(data.message)
      })
      .catch((error) => setApiMsg(error.message))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>API TEST : {apiMsg}</p>
      </header>
    </div>
  )
}

export default App
