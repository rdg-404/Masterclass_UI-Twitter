import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import twitterLogo from './assets/logo-twitter.svg'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className='logo' src={twitterLogo} alt="Logo twitter" />

        <nav></nav>

        <button className='new-tweet'>Tweet</button>
      </aside>
      <div className="content">
        content
      </div>
    </div>
  </React.StrictMode>,
)
