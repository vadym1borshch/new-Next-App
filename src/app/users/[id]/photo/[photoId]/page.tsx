import React from 'react'

interface IUserPhotoProps {
  params: { id: number; photoId: number }
}

const UserPhoto = ({ params: { id, photoId } }: IUserPhotoProps) => {
  return (
    <>
      USER PHOTO - {id} - {photoId}
    </>
  )
}

export default UserPhoto
