import React from 'react'

interface IUserDetailsProps {
  params: { id: number }
}

const UserDetails = ({ params: { id } }: IUserDetailsProps) => {
  return <>User details - {id}</>
}

export default UserDetails
