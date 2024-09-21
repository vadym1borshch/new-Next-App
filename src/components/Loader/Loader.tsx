import React, { ReactNode } from 'react'

interface ILoaderProps {
  children?: ReactNode
}

const Loader = ({}: ILoaderProps) => {
  return <span className="loading loading-spinner loading-lg"></span>
}

export default Loader
