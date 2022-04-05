import React, { startTransition } from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>A 更新</button>
      <button
        onClick={() =>
          startTransition(() => {
            setCount(count + 1)
          })
        }
      >
        B更新
      </button>
    </div>
  )
}

export default Counter
