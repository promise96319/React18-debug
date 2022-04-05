import React, { useEffect, useState } from 'react'

const Batch = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count ==> ', count)
  }, [count])

  const handleClick = () => {
    // 被合并的更新
    setCount(count + 1)
    setTimeout(() => {
      // 第三个打印 3
      setCount(count + 3)
    }, 0)
    Promise.resolve().then(() => {
      // 第二个打印 4
      setCount(count + 4)
    })
    // 第一个打印 2
    setCount(count + 2)
  }

  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default Batch
