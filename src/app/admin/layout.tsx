import React, { ReactNode } from 'react'
import SideBar from '@/app/admin/SideBar/SideBar'

interface IAdminLayoutProps {
  children?: ReactNode
}

const AdminLayout = ({ children }: IAdminLayoutProps) => {
  return (
    <div className="flex gap-1 p-5">
      <SideBar />
      <main>{children}</main>
    </div>
  )
}

export default AdminLayout
