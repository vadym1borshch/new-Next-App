import React, { Suspense } from 'react'
import { sort } from 'fast-sort'
import Link from 'next/link'
import Loader from '@/components/Loader/Loader'


interface User {
  id: number
  name: string
  email: string
}

interface IUsersPageProps {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: IUsersPageProps) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {cache: 'no-cache'})
  const users: User[] = await res.json()
  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  )
  
  return (
    <div>
      <h1>Users Page</h1>
      <Link href="/users/new" className="btn btn-primary">
        Add new user
      </Link>
      <Suspense fallback={<Loader />}>
        <div>
          <table className="table-bordered table">
            <thead>
              <tr>
                <th></th>
                <th>
                  <Link href="/users?sortOrder=name">Name</Link>
                </th>
                <th>
                  <Link href="/users?sortOrder=email">Email</Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user, i) => (
                <tr key={user.id} className="bg-base-200">
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Suspense>
    </div>
  )
}

export default UsersPage
