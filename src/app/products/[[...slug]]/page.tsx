import React from 'react'

interface IProductPageProps {
  params: { slug: string[] }
  searchParams: { sortOrder: string }
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: IProductPageProps) => {
  return (
    <>
      PRODUCT PAGE --- {slug} ---- {sortOrder}
    </>
  )
}

export default ProductPage
