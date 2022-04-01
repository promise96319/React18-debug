import React, { Suspense } from 'react'
import { request } from './utils/api'
// const OtherComponent = React.lazy(() => import('./counter'))

const OtherComponent = () => {
  const data = request('world')
  return <div>{data}</div>
}

const SuspenseComp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <OtherComponent />
  </Suspense>
)

export default SuspenseComp
