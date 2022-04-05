import React, { useState, useDeferredValue } from 'react'

const Defer = () => {
  const [searchValue, setSearchValue] = useState(100)
  const deferredSearchValue = useDeferredValue(searchValue, {
    timeoutMs: 1000,
  })

  return (
    <>
      <input
        type="number"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(Number(e.target.value) || 0)
        }}
      />

      {new Array(deferredSearchValue).fill(0).map((_, idx) => (
        <li key={idx}>{idx}</li>
      ))}
      {/* {new Array(searchValue).fill(0).map((_, idx) => (
        <li key={idx}>{idx}</li>
      ))} */}
    </>
  )
}

export default Defer
