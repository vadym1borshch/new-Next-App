'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const AddNewUserPage = ({}) => {
  const router = useRouter()
  return (
    <div className="ga-5 flex flex-col">
      <div>AddNewUserFORM</div>
      <button className="btn btn-success" onClick={() => router.push('/users')}>
        Create
      </button>
    </div>
  )
}

export default AddNewUserPage
