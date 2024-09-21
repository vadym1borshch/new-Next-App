import { NextRequest, NextResponse } from 'next/server'
import schema from '@/app/api/products/schema'
import prisma from '../../../../../prisma/client'

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string
    }
  }
) {
  //fetch data fom db
  //if not found, return 404 error
  //else return data
  const product = await prisma.product.findUnique({
    where: { id: +params.id },
  })

  if (!product) {
    return NextResponse.json({ error: 'product not found' }, { status: 404 })
  }
  return NextResponse.json(product)
}

export async function PUT(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string
    }
  }
) {
  const body = await req.json()
  const validate = schema.safeParse(body)
  if (!validate.success) {
    return NextResponse.json(validate.error.errors, { status: 400 })
  }

  const product = await prisma.product.findUnique({
    where: { id: +params.id },
  })

  if (!product) {
    return NextResponse.json({ error: 'product not found' }, { status: 404 })
  }

  if (product.id === +params.id && product.name === body.name) {
    return NextResponse.json({ error: 'product already apdate' })
  }
  const updatedProduct = await prisma.product.update({
    where: { id: +params.id },
    data: {
      name: body.name,
      price: body.price,
    },
  })

  return NextResponse.json(updatedProduct)
}

export async function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string
    }
  }
) {
  const product = await prisma.product.findUnique({
    where: { id: +params.id },
  })

  if (!product) {
    return NextResponse.json({ error: 'user not found' }, { status: 400 })
  }
  await prisma.product.delete({
    where: { id: +params.id },
  })
  return NextResponse.json({}, { status: 200 })
}
