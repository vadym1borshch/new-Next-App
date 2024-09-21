import React, { ReactNode } from 'react'
import Link from 'next/link'

interface INavBarProps {
  children?: ReactNode
}

function NavBar({}: INavBarProps) {
  return (
    <div className="flex gap-3 p-5">
      <Link href="/">Home</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/products">Products</Link>
      <Link href="/users">Users</Link>
    </div>
  )
}

export default NavBar