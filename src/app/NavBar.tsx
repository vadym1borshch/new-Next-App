'use client'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'

/*import { useSession } from 'next-auth/react'
import Loader from '@/components/Loader/Loader'*/

interface INavBarProps {
  children?: ReactNode
}

function NavBar({}: INavBarProps) {
  /*const { status, data: session } = useSession()*/
  const handleLogin = async () => {
    try {
      await signIn('google', {
        callbackUrl: '/users',
      })
    } catch (error) {
      console.error('Failed to log in:', error)
    }
  }

  return (
    <div className="flex gap-3 p-5">
      <Link href="/">Home</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/products">Products</Link>
      <Link href="/users">Users</Link>
      <button onClick={handleLogin}>login</button>
      <button onClick={() => signOut()}>out</button>
      {/*{status === 'loading' && <Loader />}
      {status === 'authenticated' && (
        <div className="flex gap-5">
          <div> {session?.user?.name} </div>
          <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin">Login</Link>
      )}*/}
    </div>
  )
}

export default NavBar
