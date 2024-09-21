'use client'
import React, { useEffect, useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary'

interface CloudinaryRes {
  public_id: string
}

const UploadPage = ({}) => {
  const [publicId, setPublicId] = useState('')

  useEffect(() => {
    const image = localStorage.getItem('image')
    if (image) {
      setPublicId(image)
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        {publicId && (
          <CldImage
            alt="image"
            src={publicId}
            width={280}
            height={180}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        )}
      </div>
      <div>
        <CldUploadWidget
          uploadPreset="afvl4wcw"
          onSuccess={(results) => {
            if (results.event !== 'success') {
              return
            }
            const info = results.info as CloudinaryRes
            setPublicId(info.public_id)
            localStorage.setItem('image', info.public_id)
          }}
        >
          {({ open }) => (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload
            </button>
          )}
        </CldUploadWidget>
      </div>
    </div>
  )
}

export default UploadPage
