import { NextRequest, NextResponse } from 'next/server'
import schema from '@/app/api/users/schema'
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
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  })
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }
  return NextResponse.json(user)
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json()
  const validate = schema.safeParse(body)
  if (!validate.success) {
    return NextResponse.json(
      validate.error.errors.map((e) => e.message),
      { status: 400 }
    )
  }

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  })

  if (!user) {
    return NextResponse.json({ error: 'user not found' }, { status: 404 })
  }

  const updatedUser = await prisma.user.update({
    where: { id: params.id },
    data: {
      name: body.name,
      email: body.email,
    },
  })
  return NextResponse.json(updatedUser)
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  })
  if (!user) {
    return NextResponse.json({ error: 'user not found' }, { status: 404 })
  }
  await prisma.user.delete({
    where: { id: user.id },
  })
  return NextResponse.json({}, { status: 200 })
}
