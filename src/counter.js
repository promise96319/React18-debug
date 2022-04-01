import React from 'react'
import { request } from './utils/api'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  const res = request(300)
  return (
    <div>
      <h1>result: {res}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter
