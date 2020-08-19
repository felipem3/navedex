import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [token, setToken] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const saveToken = newToken => {
    setToken(newToken)
    if (newToken && newToken != '') {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, saveToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
