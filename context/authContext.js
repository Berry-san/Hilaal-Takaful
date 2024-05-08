'use client'

import React, { createContext, useContext, useState } from 'react'

// Create the context
const AuthContext = createContext()

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext)

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)

  const login = (userData) => {
    // Logic to set the authenticated user
    setAuthUser(userData)
    sessionStorage.setItem('user', userData)
  }

  const logout = () => {
    // Logic to clear the authenticated user
    setAuthUser(null)
  }

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
