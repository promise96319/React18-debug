import React, { Suspense } from 'react'
import { request } from './utils/api'
import { unstable_createResource } from 'react-cache'

const data = unstable_createResource((data) => request(data))

const AsyncComponent = () => {
  const res = data.read(10000)
  return (
    <ul>
      {new Array(res).fill(0).map((_, i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

const SuspenseComp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AsyncComponent />
  </Suspense>
)

export default SuspenseComp
