import React, { ReactNode } from 'react'

interface ISideBarProps {
  children?: ReactNode
}

const SideBar = ({}: ISideBarProps) => {
  return <div className="bg-amber-100 text-black">SIDE_BAR</div>
}

export default SideBar
