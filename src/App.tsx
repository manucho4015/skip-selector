import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// pages
import SelectSkipPage from './pages/SelectSkipPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SelectSkipPage />
  )
}

export default App
