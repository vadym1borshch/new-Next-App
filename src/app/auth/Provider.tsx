"use client"
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface IAuthProviderProps {
  children?: ReactNode
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
