import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'
import './global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
    <Tweet user="Rodrigo" likes={3}>
      hello
    </Tweet>
    <Tweet user="Diego">
      hi
    </Tweet>
    <Tweet user="Ana">
      whats'up
    </Tweet>
    </div>
  </React.StrictMode>,
)
