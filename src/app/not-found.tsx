import React, { ReactNode } from 'react'

interface INotFoundPageProps {
  children?: ReactNode
}

const NotFoundPage = ({}: INotFoundPageProps) => {
  return <div>The requested page doesn&apos;t exist</div>
}

export default NotFoundPage
