import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import "./App.css"

import { UserContext } from './components/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <UserContext.Provider value={"Ebin"}>
        <App/>
      </UserContext.Provider>
    </StrictMode>
  )
