import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './tailwind.css';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-blue-500">Hello</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}
