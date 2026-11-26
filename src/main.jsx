import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import "./App.css"

import { UserContext } from './components/UserContext.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <UserContext.Provider value={"Ebin"}>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </UserContext.Provider>
    </StrictMode>
  )
