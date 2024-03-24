import { useState } from 'react'
import cl from './counter.module.scss'
export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className={cl.a}>{count}</div>
      <button onClick={() => setCount((prev) => ++prev)}>increment</button>
      <button onClick={() => setCount((prev) => --prev)}>decrement</button>
    </div>
  )
}
