import React from 'react'
import { createRoot } from 'react-dom/client'
import Suspense from './suspense'
import Batch from './batch'
import Defer from './defer'
import Transition from './transition'

const App = () => (
  <div>
    <header>React v18.0.0</header>
    {/* <Batch></Batch> */}
    {/* <Suspense></Suspense> */}
    {/* <Defer></Defer> */}
    <Transition></Transition>
    <footer>updated at 2022</footer>
  </div>
)

const root = document.getElementById('app')
createRoot(root).render(<App></App>)
