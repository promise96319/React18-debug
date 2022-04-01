import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => <div>hello world!</div>

const root = document.getElementById('app')
createRoot(root).render(<App></App>)
