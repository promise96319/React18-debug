import React from 'react'
import { createRoot } from 'react-dom/client'
import Suspense from './suspense'

const App = () => (
  <div>
    <Suspense></Suspense>
  </div>
)

const root = document.getElementById('app')
createRoot(root).render(<App></App>)
