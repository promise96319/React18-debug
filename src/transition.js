import React, { useState, useTransition, Suspense } from 'react'

const Transition = () => {
  const [searchValue, setSearchValue] = useState(100)
  const [isPending, startTransition] = useTransition()

  return (
    <>
      <input
        type="number"
        value={searchValue}
        onChange={(e) => {
          startTransition(() => {
            setSearchValue(Number(e.target.value) || 0)
          })
        }}
      />

      {isPending ? (
        <div>loading...</div>
      ) : (
        <div>
          {new Array(searchValue).fill(0).map((_, idx) => (
            <li key={idx}>{idx}</li>
          ))}
        </div>
      )}
    </>
  )
}

export default Transition
