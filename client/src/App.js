import { useEffect, useState } from 'react'
import { api_server } from 'index'

function App() {
  const [state, setstate] = useState(null)

  useEffect(() => {
    fetch(`${api_server}/test`)
      .then((res) => res.text())
      .then((text) => setstate(text))
  }, [])
  return <div className="App">{state}</div>
}

export default App
